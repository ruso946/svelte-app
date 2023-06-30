<script>
  import SelectPlan from "./assets/SelectPlan.svelte";
  import { onMount, onDestroy } from "svelte";
  import { db } from "./configFirebase/firebasePacientes";
  import {
    onSnapshot,
    collection,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
    getDocs,
    query,
    where,
    orderBy,
  } from "firebase/firestore";
  import Toastify from "toastify-js";
  import Swal from "sweetalert2";
  import "sweetalert2/src/sweetalert2.scss";
  import {
    pacienteSeleccionado,
    apellidoSeleccionado,
    idPacienteSeleccionado,
    nombreSeleccionado,
  } from "./store";
  import {
    agregarClavesFaltantes,
    actualizaPaciente,
  } from "./modulos/moduloPacientes";
  import SelectorPacientes from "./assets/SelectorPacientes.svelte";

  export let pacientes = []; //array que viene del unsub de Padre.svelte que trae toda la db pacientes
  export let sesiones;
  export let planes;
  export let planSeleccionado;
  let arrayDeNombresDeClaves = [
    // usado para hacer que todos los campos de la base de datos y el array pacientes tengan todas las claves
    "nombre",
    "apellido",
    "nroSocio",
    "plan",
    "createdAt",
  ];

  export let optionsPlan;

  let indicePlan; //prop a pasar a SelectPlan para actualizar la vista al cambiar de paciente en el SelectorPacientes

  let planSelect = "particular";

  let i;

  let SelectPlanVisible; //prop o estado de SelectPlan. Se va a usar para controlar el cambio de paciente sicnronizado con la vista del SelectPlan

  //let unsubPacientes;

  // en el onMount, hace la suscripcion de pacientes y trae las opciones de planes
  //si despues paso el select de planes a otro componente, se saca de onMount esa parte
  onMount(() => {
    // lo que sigue se hizo para normalizar los docs de la db y los registros de pacientes del array. Puede que ya no sea necesario.
    agregarClavesFaltantes(pacientes, arrayDeNombresDeClaves); // si hay claves faltantes en el array de pacientes, las agrega.
    pacientes.forEach((paciente) => {
      actualizaPaciente(paciente); // agrega las claves que faltan a la base de datos firestore
    });
  }); // fin de onMount

  let prefix = "";
  let nombre = "";
  let apellido = "";
  let nroSocio = "";
  // let createdAt = new Date();

  let pacientesFiltrada = [];
  let textoLabelPlan = "plan";

  $: pacientesFiltrada = prefix // bloque reactivo que de acuerdo a si hay prefix,
    ? pacientes.filter((person) => {
        // filtra por apellido el array de pacientes y lo asigna al array pacientesFiltrada
        const name = `${person.apellido}, ${person.nombre}`;
        return name.toLowerCase().startsWith(prefix.toLowerCase());
      })
    : pacientes.map((persona) => {
        // o mapea todo el array de pacientes para asignarlo al array pacientesFiltrada
        return {
          nombre: persona.nombre,
          apellido: persona.apellido,
          plan: persona.plan,
          nroSocio: persona.nroSocio,
          id: persona.id,
        };
      });

  $: selected = pacientesFiltrada[i];

  //el siguiente bloque reactivo if, aporta al store los valores necesarios
  //del paciente seleccionado en el Select de este componente:
  //el objeto pacienteSeleccionado, el apellido, la id
  $: if (selected) {
    $pacienteSeleccionado = selected;
    $apellidoSeleccionado = selected.apellido;
    $nombreSeleccionado = selected.nombre;
    $idPacienteSeleccionado = selected.id;
  }

  $pacienteSeleccionado = selected; //chequeando a ver si está de mas esta linea

  $: reset_inputs(selected); // esta funcion hace que los campos del formulario se sincronicen con la seleccion del select pacientes

  const reset_inputs = (person) => {
    nombre = person ? person.nombre : "";
    apellido = person ? person.apellido : "";
    nroSocio = person ? person.nroSocio : "";
    planSeleccionado = person ? person.plan : {};
  };

  const agregarPaciente = async () => {
    //hay que hacer una validacion: por lo menos que no se repita nro de socio
    //o que no hayan registros duplicados de pacientes
    try {
      await addDoc(collection(db, "Pacientes"), {
        nombre,
        apellido,
        nroSocio,
        createdAt: new Date().toLocaleDateString(),
        plan: planSeleccionado,
      });
      Toastify({
        text: "Nuevo paciente agregado",
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

  const create = () => {
    pacientes = pacientes.concat({ nombre, apellido });
    i = pacientes.length - 1;
    agregarPaciente();
    nombre = apellido = planSeleccionado = nroSocio = "";
  };

  const actualizarPaciente = async (selected) => {
    try {
      await updateDoc(doc(db, "Pacientes", selected.id), selected);
      Toastify({
        text: `paciente ${selected.apellido}, ${selected.nombre} actualizado`,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

  /*esta funcion responde al boton de update del crud.
   Primero copia en el array selected los valores de los inputs del formulario.
   Despues llama a la funcion actualizarPaciente con el argumento del array selected
   para que copie esos datos en la base de datos de firestore
  */
  const update = () => {
    selected.nombre = nombre;
    selected.apellido = apellido;
    planSeleccionado = selected.plan;
    selected.nroSocio = nroSocio;
    selected = selected;
    pacientes = pacientes;
    actualizarPaciente(selected);
  };

  const borrarConfirmado = async (selected) => {
    /* hay que borrar los registros de la base de datos de sesiones 
    relacionados al paciente que se está borrando.
    O en todo caso, agregar un campo "activo" que lo deshabilite de
    la base de datos.
    */
    try {
      await deleteDoc(doc(db, "Pacientes", selected.id));
      Toastify({
        text: "Paciente eliminado",
        style: {
          background: "red",
        },
      }).showToast();
    } catch (error) {
      console.error(error);
    }

    //borra los registros de la db sesiones que corresponden al paciente borrado
    const q = query(
      collection(db, "sesiones"),
      where("pacienteID", "==", selected.id) //consulta segun selected.id en la coleccion de sesiones
    );
    console.log(
      `desde delete q=pacientes a borrar ${q} - paciente: ${selected.nombre} ${selected.apellido} ${selected.id}`
    );
    try {
      const docs = await getDocs(q);
      docs.forEach((doc) => {
        deleteDoc(doc.ref); // borra los registros de la coleccion de sesiones que corresponden a la consulta en firebase
      });
    } catch (error) {
      console.log(error);
    }
  };
  const remove = () => {
    // Remove selected person from the source array (pacientes), not the filtered array
    const index = pacientes.indexOf(selected);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        borrarConfirmado(pacientes[i]);
        pacientes = [
          ...pacientes.slice(0, index),
          ...pacientes.slice(index + 1),
        ];

        nombre = apellido = nroSocio = planSeleccionado = "";
        i = Math.min(i, pacientesFiltrada.length - 2);
      }
    });
  };
  const previaActualizaPaciente = (planSeleccionado) => {
    selected.plan = planSeleccionado;
    selected.nombre = nombre;
    selected.apellido = apellido;
    selected.nroSocio = nroSocio;
    pacientesFiltrada[i].plan = planSeleccionado; // esta linea hace que el select de pacientes se actualice,
    actualizarPaciente(selected); //esta linea hace la actualizacion en la base de datos con el plan seleccionado.
  };
  const cambioPlan = (event) => {
    //console.log(`event.detail.plan pasado a cambioPlan ${event.detail.plan}`)
    planSeleccionado = event.detail; //es un objeto plan
    console.log(planSeleccionado);
    if (selected.plan.plan != planSeleccionado.plan) {
      //compara los nombres de los objetos plan (plan.plan)
      //solo se actualiza si el click implica un cambio de plan.
      previaActualizaPaciente(planSeleccionado);
    }
  };

  const modificaLabelPlan = (esParticular) => {
    //si el argumento es true, lo pinta como particular
    if (esParticular) {
      textoLabelPlan = "particular";
      SelectPlanVisible = false;
    } else {
      textoLabelPlan = "plan";
      SelectPlanVisible = true;
    }
  };

  const handleSelectorPacientes = (event) => {
    //funcion que trae del evento personalizado del componente SelectorPacientes
    i = event.detail[0]; //el valor de i, que es el indice de la lista de pacientes filtrada que se
    const planSelect = event.detail[1]; //actualiza al seleccionar un paciente en el select del componente
    $idPacienteSeleccionado = event.detail[2]; //actualiza el id de paciente seleccionado en el store    
    const planSelectNombrePlan =
      typeof planSelect == "string" ? "particular" : planSelect.plan; //planSelect es un objeto
    console.log(`i ${i}, planSelect ${planSelectNombrePlan}`);

    planSeleccionado =
      planSelectNombrePlan == "particular"
        ? "particular" //planSeleccionado="particular"
        : pacientesFiltrada[i].plan; //da a planSeleccionado el objeto plan del paciente que se eligio en el SelectorPacientes
    if (planSeleccionado != "particular") {
      indicePlan = planes.findIndex(
        (plan) => plan["plan"] === planSelectNombrePlan
      );
      console.log(`indicePlan ${indicePlan}, ${typeof indicePlan}`);
    }
    const esParticular = planSelectNombrePlan == "particular" ? true : false;

    modificaLabelPlan(esParticular);
  };

  const clickCheckPlan = (event) => {
    // funcion que trae el evento del checkbox del componente
    const noEsParticular = event.detail.valor.SelectPlanVisible; // SelectPlan para controlar en este componente lo que
    if (!noEsParticular) {
      planSeleccionado = "particular";
    } else if (noEsParticular && planSeleccionado == "particular") {
      planSeleccionado = "210";
    }
    previaActualizaPaciente(planSeleccionado);
    modificaLabelPlan(!noEsParticular);
  };

  function copyToClipboard(e) {
    /* Obtener el campo de entrada */
    const input = document.getElementById("inputNroSocio");

    console.log(`input ${input}`);

    /* Seleccionar el texto del campo de entrada */
    input.select();
    input.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    /* Copiar el texto seleccionado al portapapeles */
    document.execCommand("copy");

    /* Alerta o retroalimentación para el usuario */
    //alert("Texto copiado al portapapeles: " + input.value);
  }
</script>

<body>
  <div id="botones">
    <div class="buttons">
      <button
        on:click={create}
        disabled={!nombre || !apellido || !planSeleccionado || !nroSocio}
        >create</button
      >
      <button
        on:click={update}
        disabled={!nombre ||
          !apellido ||
          !planSeleccionado ||
          !nroSocio ||
          !selected}>update</button
      >
      <button on:click={remove} disabled={!selected}>delete</button>
    </div>    
  </div>

  <div id="filter">
    <label for="filterPrefix">filtrar por apellido</label><input
      name="filterPrefix"
      placeholder="filter prefix"
      bind:value={prefix}
    />
    <!--este prefix es la base para filtrar el array pacientes-->
  </div>

  <div id="selectPacientes">
    <!--  el SelectorPacientes trae un evento personalizado que actualiza el indice de la listaFiltrada de pacientes-->
    <SelectorPacientes
      on:cambioSelectPaciente={handleSelectorPacientes}
      {pacientesFiltrada}
      {planSelect}
    />
  </div>

  <div id="formInputsI">
    <label for="nombre">nombre</label><input
      name="nombre"
      bind:value={nombre}
      placeholder="nombre"
    />
    <label for="apellido">apellido</label><input
      name="apellido"
      bind:value={apellido}
      placeholder="apellido"
    />
  </div>

  <div id="formInputsD">
    <label for="nroSocio">nº socio</label>
    <div class="formRow">
      <input
        id="inputNroSocio"
        name="nroSocio"
        bind:value={nroSocio}
        placeholder="nro de Socio"
      />
      <button on:click={copyToClipboard}>✎</button>
    </div>
    <label id="labelPlan" for="plan">{textoLabelPlan}</label>
    <SelectPlan
      on:cambioPlan={cambioPlan}
      on:clickCheckPlan={clickCheckPlan}
      {planes}
      {planSeleccionado}
      {SelectPlanVisible}
      {indicePlan}
    />
  </div>
</body>

<style>
  * {
    font-family: inherit;
    font-size: inherit;
    margin: 0;
  }

  body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 0.3fr 0.3fr;
    grid-template-areas:
      "filter filter"
      "selectPacientes selectPacientes"
      "botones botones"
      "formInputsI formInputsD"
      "selectPlan selectPlan";
  }

  #filter {
    grid-area: filter;
    display: flex;
    flex-direction: column;
    place-items: start;
    padding: 3px;
    justify-items: center;
    align-items: center;
    background-color: cadetblue;
  }

  #filter input {
    max-width: 200px;
  }

  #filter label {
    max-width: 200px;
    text-align: start;
  }

  #botones {
    grid-area: botones;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    background-color: cadetblue;
  }

  #selectPacientes {
    grid-area: selectPacientes;
    place-items: start;
    padding: 3px;
    justify-items: center;
    align-items: start;
    background-color: cadetblue;
  }

  #formInputsD {
    grid-area: formInputsD;
  }

  #formInputsI {
    grid-area: formInputsI;
  }

  #formInputsD input {
    text-align: end;
  }

  #formInputsI,
  #formInputsD {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 0.5em;
    background-color: cadetblue;
    padding: 3px;
  }

  .formRow {
    display: flex;
    align-items: center;
  }

  .formRow label {
    margin-right: 5px;
  }

  label {
    display: inline;
    margin: 0;
    width: 80%;
    text-align: end;
    color: aliceblue;
    font-size: x-small;
    margin-top: 3px;
  }

  input {
    margin: 0;
    width: 80%;
    font-size: medium;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.5em;
  }
</style>
