<script>
  import SelectPlan from "./assets/SelectPlan.svelte";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { db } from "./firebasePacientes";
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
  import { agregarClavesFaltantes, actualizaPaciente } from "./moduloPacientes";
  import SelectorPacientes from "./SelectorPacientes.svelte";

  let pacientes = []; //array que viene del unsub de Padre.svelte que trae toda la db pacientes

  let arrayDeNombresDeClaves = [
    // usado para hacer que todos los campos de la base de datos y el array pacientes tengan todas las claves
    "nombre",
    "apellido",
    "nroSocio",
    "plan",
    "createdAt",
  ];

  let optionsPlan = [];

  let grupoButtonRadio = "";

  let unsubPacientes;

  // en el onMount, hace la suscripcion de pacientes y trae las opciones de planes
  //si despues paso el radio button group de planes a otro componente, se saca de onMount esa parte
  onMount(() => {
    unsubPacientes = onSnapshot(
      collection(db, "Pacientes"),
      (querySnapshot) => {
        pacientes = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        // lo que sigue se hizo para normalizar los docs de la db y los registros de pacientes del array. Puede que ya no sea necesario.
        agregarClavesFaltantes(pacientes, arrayDeNombresDeClaves); // si hay claves faltantes en el array de pacientes, las agrega.
        pacientes.forEach((paciente) => {
          actualizaPaciente(paciente); // agrega las claves que faltan a la base de datos firestore
        });
        const compararPorApellido = (persona1, persona2) => {
          //funcion para ordenar con pacientes.sort()
          if (persona1.apellido < persona2.apellido) {
            return -1;
          }
          if (persona1.apellido > persona2.apellido) {
            return 1;
          }
          return 0;
        };
        pacientes.sort(compararPorApellido); // ordena los pacientes por orden alfabetico de apellido
      },
      (err) => {
        console.log(err);
      }
    );

    const fetchOptionsRadioButtonGroupPlanes = async () => {
      // Consulta la base de datos para obtener las opciones del grupo radio button de planes
      const optionsCollection = collection(db, "planes");
      const optionsSnapshot = await getDocs(optionsCollection);
      console.log("109 async para el radio button", optionsSnapshot);
      optionsPlan = optionsSnapshot.docs.map((doc) => doc.data().plan);
      optionsPlan.push("particular");
      optionsPlan.sort();
      grupoButtonRadio = "particular";
    };
    fetchOptionsRadioButtonGroupPlanes();
  }); // fin de onMount

  onDestroy(unsubPacientes); // quita la suscripcion a la escucha al cambiar de pagina o destruir el componente

  let prefix = "";
  let nombre = "";
  let apellido = "";
  let nroSocio = "";
  let planSeleccionado = "";
  let createdAt = new Date();
  let i = 0;
  let pacientesFiltrada;

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

  // $: console.log(             //descomentar para control reactivo de la lista de pacientes filtrada
  //   "pacientesFiltrada",
  //   pacientesFiltrada,
  //   pacientesFiltrada.length
  // );

  $: selected = pacientesFiltrada[i];
  $: console.log("i:", i);

  //el siguiente bloque reactivo if, aporta al store los valores necesarios
  //del paciente seleccionado en el Select de este componente:
  //el objeto pacienteSeleccionado, el apellido, la id
  $: if (selected) {
    $pacienteSeleccionado = selected;
    $apellidoSeleccionado = selected.apellido;
    $nombreSeleccionado = selected.nombre;
    $idPacienteSeleccionado = selected.id;
    console.log(selected);
  }

  //$pacienteSeleccionado = selected;    //chequeando a ver si está de mas esta linea

  $: reset_inputs(selected); // esta funcion hace que los campos del formulario se sincronicen con la seleccion del select pacientes

  const reset_inputs = (person) => {
    nombre = person ? person.nombre : "";
    apellido = person ? person.apellido : "";
    nroSocio = person ? person.nroSocio : "";
    planSeleccionado = person ? person.plan : "";
  };

  const agregarPaciente = async () => {
    //hay que hacer una validacion: por lo menos que no se repita nro de socio
    //o que no hayan registros duplicados de pacientes

    console.log(nombre, apellido, nroSocio, planSeleccionado);
    try {
      await addDoc(collection(db, "Pacientes"), {
        nombre,
        apellido,
        nroSocio,
        createdAt: new Date().toLocaleDateString(),
        plan: planSeleccionado,
      });
      console.log("paciente agregado");
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
      where("pacienteID", "==", selected.id)//consulta segun selected.id en la coleccion de sesiones
    );
    console.log(
      `desde delete q=pacientes a borrar ${q} - paciente: ${selected.nombre} ${selected.apellido} ${selected.id}`
    );
    try {
      const docs = await getDocs(q);
      docs.forEach((doc) => {
        deleteDoc(doc.ref);// borra los registros de la coleccion de sesiones que corresponden a la consulta en firebase
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

  const handleOnClickSelectPlan2 = (event) => {
    // console.log(event.detail.valor.planSeleccionado); //toma el valor del select por un evento del componente SelectPlan
    planSeleccionado = event.detail.valor.planSeleccionado;
    if (selected.plan != planSeleccionado) {
      //solo se actualiza si el click implica un cambio de plan.
      selected.plan = planSeleccionado;
      selected.nombre = nombre;
      selected.apellido = apellido;
      selected.nroSocio = nroSocio;
      pacientesFiltrada[i].plan = planSeleccionado; // esta linea hace que el select de pacientes se actualice,
      console.log("242", selected);
      actualizarPaciente(selected); //esta linea hace la actualizacion en la base de datos con el plan seleccionado.
    }
  };

  //const dispatch = createEventDispatcher();
  // const handleSelect = (event) => {
  //   const selectedPaciente = event.target.value;
  //   grupoButtonRadio = pacientesFiltrada[selectedPaciente].plan;
  //   dispatch("pacienteSelected", selectedPaciente);
  //   console.log("dispatch", selectedPaciente);
  //   /*con este evento pacienteSelected que se dispara al cambiar de eleccion de paciente
  //    en el select de pacientes se entrega el valor de ese select.
  //    En este momento es "i", pero podría pasarse el objeto correspondiente al paciente seleccionado
  //    junto a "i" en un array.
  //    De este modo, se puede mantener el funcionamiento en base a "i" de la logica del componente
  //    y al mismo tiempo, simplificar el estado del componente y prescindir del uso del store
  //   */
  // };
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
    <SelectorPacientes {pacientesFiltrada} {grupoButtonRadio} />
    <!-- <select
      name="select-pacientes"
      class="select-Pacientes"
      on:change={handleSelect}
      bind:value={i}
      size={5}
      >{#if pacientesFiltrada.length == 0}
        <option disabled>no hay resultados para ese prefijo...</option>
      {:else}
        {#each pacientesFiltrada as person, i}
           este bucle each itera por la lista filtrada con el indice i
				que es el que le da el valor seleccionado al select 
          <option value={i}
            >{`${person.nroSocio}-${person.apellido}, ${person.nombre} plan ${person.plan}`}</option
          >
        {/each}
      {/if}
    </select> -->
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
    <label for="nroSocio">nº socio</label><input
      name="nroSocio"
      bind:value={nroSocio}
      placeholder="nro de Socio"
    />
    <label for="plan">plan</label><SelectPlan
      on:cambioPlan={handleOnClickSelectPlan2}
      planes={optionsPlan}
      {planSeleccionado}
    />
  </div>

  <!--Lo que sigue era el selector de planes en la version radio button group
      Va junto con la funcion handleSelectPlan2                             -->
  <!-- <div id="selectPlanContainer">
    <p id="selectPlanTitulo">plan a seleccionar</p>
    <div id="selectPlan">
      {#each optionsPlan as optionPlan}
        <span>
          <input
            class="selectorPlanes"
            name="SelectPlan"
            type="radio"
            on:change={handleOnClickSelectPlan2}
            bind:group={grupoButtonRadio}
            value={optionPlan}
          />
          <label for="selectorPlanes" class="selectorPlan">
            {optionPlan}
          </label>
        </span>
      {/each}
    </div>
    <div>      
    </div>
  </div> -->
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
    justify-content: space-between;
    padding: 0.5em;
    background-color: cadetblue;
    padding: 3px;
  }

  /* #selectPlanContainer {
    display: flex;
    grid-area: selectPlan;
    flex-direction: column;
    justify-items: center;
    background-color: cadetblue;
  } */

  /* #selectPlanTitulo {
   
    margin: auto;
    padding: 3px;
    place-items: center;
    text-align: start;
    background-color: cadetblue;
    color: aliceblue;
  } */

  /* #selectPlan {
  
    display: flex;
    flex-direction: row;
    gap: 2em;
    background-color: cadetblue;
    padding: 3px;
    margin: auto;
  } */

  label {
    display: inline;
    margin: 0;
    width: 80%;
    text-align: end;
    color: aliceblue;
    font-size: x-small;
    margin-top: 3px;
  }

  /* label.selectorPlan {
    display: block;
    width: 2em;
  } */

  input {
    margin: 0;
    width: 80%;
    font-size: medium;
  }

  select {
    max-width: 100%;
    width: 100%;
    margin: 0;
    font-size: small;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.5em;
  }

  /* .selectorPlanes {
    font-size: 0.75em;
    display: block;
    padding: 0.5em;
    height: 1em;
    width: 1em;
    align-items: center;
    text-align: left;
  } */
</style>
