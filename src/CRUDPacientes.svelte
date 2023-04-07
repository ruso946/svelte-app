<script>
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

  export let pacientes = []; //array que viene del unsub de Padre.svelte que trae toda la db pacientes

  let arrayDeNombresDeClaves = [
    // usado para hacer que todos los campos de la base de datos y el array pacientes tengan todas las claves
    "nombre",
    "apellido",
    "nroSocio",
    "plan",
    "createdAt",
  ];

  const agregarClavesFaltantes = (pacientes, arrayDeNombresDeClaves) => {
    //funcion que agrega los nombres de las claves faltantes en caso de que las haya, en el array pacientes.
    // Iterar por cada objeto en el array
    pacientes.forEach((paciente) => {
      // Iterar por cada nombre de clave en el array de nombres de claves
      arrayDeNombresDeClaves.forEach((nombreDeClave) => {
        // Verificar si la clave está presente en el objeto
        if (!(nombreDeClave in paciente)) {
          // Si la clave no está presente, agregarla con un valor null
          paciente[nombreDeClave] = null;
        }
      });
    });
  };
  //utilizada para agregar las claves faltantes al array pacientes
  const actualizaPaciente = async (selected) => {
    try {
      await updateDoc(doc(db, "Pacientes", selected.id), selected);
    } catch (error) {
      console.log(error);
    }
  };

  //esta funcion de subscripcion recien devuelve el array pacientes con los datos de firestore
  //al terminar el map, no antes.
  const unsubPacientes = onSnapshot(
    collection(db, "Pacientes"),
    (querySnapshot) => {
      pacientes = querySnapshot.docs.map((doc) => {
        //console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
      agregarClavesFaltantes(pacientes, arrayDeNombresDeClaves);
      console.log("Desde Padre.svelte>unsubPacientes", pacientes);
      pacientes.forEach((paciente) => {
        actualizaPaciente(paciente);
      });
    },
    (err) => {
      console.log(err);
    }
  );

  onDestroy(unsubPacientes); // quita la suscripcion a la escucha al cambiar de pagina o destruir el componente

  //export let sesiones;

  let optionsPlan = [];

  let grupoButtonRadio = "";

  onMount(async () => {
    // Consulta la base de datos para obtener las opciones del grupo radio button de planes
    const optionsCollection = collection(db, "planes");
    const optionsSnapshot = await getDocs(optionsCollection);
    optionsPlan = optionsSnapshot.docs.map((doc) => doc.data().plan);
    optionsPlan.push("particular");
    optionsPlan.sort();
    grupoButtonRadio = "particular";
  });

  let prefix = "";
  let nombre = "";
  let apellido = "";
  let nroSocio = "";
  let planSeleccionado = "";
  let createdAt = new Date();
  let i = 0;
  let filteredPeople;

  console.log("desde crud pacientes 99:", pacientes);

  $: filteredPeople = prefix
    ? pacientes.filter((person) => {
        const name = `${person.apellido}, ${person.nombre}`;
        return name.toLowerCase().startsWith(prefix.toLowerCase());
      })
    : pacientes.map((persona) => {
        return {
          nombre: persona.nombre,
          apellido: persona.apellido,
          plan: persona.plan,
          nroSocio: persona.nroSocio,
          id: persona.id,
        };
      });

  console.log("filteredPeople", filteredPeople);

  $: selected = filteredPeople[i];

  //el siguiente bloque reactivo if, aporta al store los valores necesarios
  //del paciente seleccionado en el Select de este componente:
  //el objeto pacienteSeleccionado, el apellido, la id
  $: if (selected) {
    $pacienteSeleccionado = selected;
    $apellidoSeleccionado = selected.apellido;
    $nombreSeleccionado = selected.nombre;
    $idPacienteSeleccionado = selected.id;
  }

  $pacienteSeleccionado = selected;

  $: reset_inputs(selected);

  const reset_inputs = (person) => {
    nombre = person ? person.nombre : "";
    apellido = person ? person.apellido : "";
    nroSocio = person ? person.nroSocio : "";
    planSeleccionado = person ? person.plan : "";
  };

  const agregarPaciente = async (i) => {
    try {
      await addDoc(collection(db, "Pacientes"), {
        ...pacientes[i],
        createdAt: new Date().toLocaleDateString(),
        planSeleccionado,
        nroSocio,
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
    agregarPaciente(i);
    nombre = apellido = planSeleccionado = nroSocio = "";
  };

  const actualizarPaciente = async (selected) => {
    console.log("selected justo antes de try catch", selected);
    try {
      await updateDoc(doc(db, "Pacientes", selected.id), selected);
      Toastify({
        text: `paciente ${selected.apellido}, ${selected.nombre} actualizado`,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };

  const update = () => {
    console.log("en function update al ppio selected", selected);
    console.log(
      "en function update al ppio planSeleccionado",
      planSeleccionado
    );
    selected.nombre = nombre;
    selected.apellido = apellido;
    planSeleccionado = selected.plan;
    selected.nroSocio = nroSocio;
    selected = selected;
    pacientes = pacientes;
    console.log("en function update al final", selected);
    console.log("pacientes en update", pacientes);
    actualizarPaciente(selected);
  };

  const borrarConfirmado = async (selected) => {
    console.log("borrar", selected.id);

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
        i = Math.min(i, filteredPeople.length - 2);
      }
    });
  };

  const handleOnClickSelectPlan = (event) => {
    planSeleccionado = event.target.value;
    selected.plan = planSeleccionado;
  };

  const dispatch = createEventDispatcher();
  const handleSelect = (event) => {
    const selectedPaciente = event.target.value;
    dispatch("pacienteSelected", selectedPaciente);
  };
  let person;
</script>

<body>
  <div class="filter">
    <input placeholder="filter prefix" bind:value={prefix} />
    <!--este prefix es la base para filtrar el array pacientes-->
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
  <select
    class="selectPacientes"
    on:change={handleSelect}
    bind:value={i}
    size={10}
  >
    {#each filteredPeople as person, i}
      <!-- este bucle each itera por la lista filtrada con el indice i
				que es el que le da el valor seleccionado al select -->

      <option value={i}
        >{`${person.nroSocio}-${person.apellido}, ${person.nombre} plan ${person.plan}`}</option
      >
    {/each}
  </select>

  <div class="formInputs">
    <label><input bind:value={nombre} placeholder="nombre" /></label>
    <label><input bind:value={apellido} placeholder="apellido" /></label>
    <label><input bind:value={nroSocio} placeholder="nro de Socio" /></label>
    <label><input bind:value={planSeleccionado} placeholder="plan" /></label>
  </div>

  <p class="selectPlanTitulo">plan a seleccionar</p>
  <div class="selectPlan">          
      {#each optionsPlan as optionPlan}
        <span>
          <input
            class="selectorPlanes"
            name="SelectPlan"
            type="radio"
            on:click={handleOnClickSelectPlan}
            bind:group={grupoButtonRadio}
            value={optionPlan}
          />
          <label for="selectorPlanes" class="selectorPlan">
            {optionPlan}
          </label>
        </span>
      {/each}
    
  </div>
</body>

<style>
  * {
    font-family: inherit;
    font-size: inherit;
  }

  body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 8fr 4fr 1fr 2fr;
    grid-template-areas:
      "filter selectPacientes selectPacientes"
      "formInputs formInputs formInputs"
      "selectPlanTitulo selectPlanTitulo selectPlanTitulo"
      "selectPlan selectPlan selectPlan";
    margin: 0;
  }

  .filter {
    grid-area: filter;
    place-items: start;
    padding: 1em;
    justify-items: center;
    align-items: start;
  }

  .selectPacientes {
    grid-area: selectPacientes;
    place-items: start;
    padding: 1em;
    justify-items: center;
    align-items: start;
  }

  .formInputs {
    grid-area: formInputs;
    place-items: start;
    padding: 0.5em;
    justify-items: center;
    align-items: start;
  }

  .selectPlanTitulo{
    grid-area: selectPlanTitulo;
  }
  .selectPlan {
    grid-area: selectPlan;
    display: flex;
    flex-direction: row;
    place-items: start;
    gap: 2.5em;
  }

  label {
    display: inline;
    margin: 0 0 0.5em 0;
  }

  label.selectorPlan {
    display: block;
    width: 2em;
  }
  input {
    display: inline-block;
    margin: 0 0 0.5em 0;
    width: max-content;
  }

  select {
    float: left;
    margin: 0 1em 1em 0;
    width: 15em;
    font-size: small;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    clear: both;
    justify-content: flex-start;
    gap: 0.5em;
  }

  .selectorPlanes {
    font-size: 0.75em;
    display: block;
    padding: 0.5em;
    height: 1em;
    width: 1em;
    align-items: center;
    text-align: left;
  }
</style>
