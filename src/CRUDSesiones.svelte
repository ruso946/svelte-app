<script>
  import { onMount } from "svelte";
  import Toastify from "toastify-js";
  import Swal from "sweetalert2";
  import "sweetalert2/src/sweetalert2.scss";

  import { db } from "./firebasePacientes";

  import {
    collection,
    query,
    onSnapshot,
    where,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    setDoc,
    orderBy,
    updateDoc,
  } from "firebase/firestore";

  export let sesiones; // array que va a usarse para suscribirse a la db sesiones.
  let pacientes; // array que va a usarse para suscribirse a la db Pacientes.
  import {
    pacienteSeleccionado,
    idPacienteSeleccionado,
    apellidoSeleccionado,
    nombreSeleccionado,
  } from "./store";

  //este onMount hace una suscripcion a las db "Pacientes" y "sesiones"
  onMount(() => {
    const unsubscribeFunctions = [];
    const sesionesRef = collection(db, "sesiones");
    const pacientesRef = collection(db, "Pacientes");
    const qs = query(sesionesRef, orderBy("pacienteID"));
    const qp = query(pacientesRef, orderBy("apellido"));

    const unsubscribeSesiones = onSnapshot(sesionesRef, (snapshot) => {
      sesiones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    console.log("desde onMount", sesiones);
    unsubscribeFunctions.push(unsubscribeSesiones);

    const unsubscribePacientes = onSnapshot(pacientesRef, (snapshot) => {
      pacientes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    unsubscribeFunctions.push(unsubscribePacientes);

    return () => {
      unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    };
  });

  let selectedSessionId;
  let selectedSession;

  $: console.log(
    "luego de las subscripciones a pacientes y sesiones",
    sesiones,
    pacientes
  );

  $: {
    selectedSession = sesiones.find(
      (sesion) => sesion.id === selectedSessionId //está tomando la sesion seleccionada como objeto a partir de la id de sesion seleccionada en el select
    );
    console.log(selectedSession);
  }

  /* ahora hay que armar la logica con el formulario y el select:
  - el select va a mostrar la lista de sesiones filtrada por el paciente
  que esté seleccionado en el formulario del componente de pacientes.
  Esto se hace a traves de un store Writable que está en store.js
  - el formulario se va a mostrar si se elige agregar o editar una sesion.
  Se muestra con la fecha del día si es para Agregar Sesion, 
  o se muestra con los datos de la sesion a editar si es para Editar Sesion.
  */

  let editStatus = true;

  /* nombreCompletoSeleccionado > variable que toma el nombre y apellido del paciente seleccionado en 
 el componente de CRUD Pacientes, que está en el store.js
*/

  /*
Funciones del formulario:
 las que invocan los clicks en los botones:
-addSesion
-updateSesion
-deleteSesion

 las que dependen de eventos:
 -handle_onchange_select_sesiones
*/
  const handle_onChange_select_sesiones = (e) => {
    selectedSessionId = e.target.value; // está tomando el valor del select al cambiar, que es el Id de sesion seleccionado
    console.log(sesiones);
    selectedSession = sesiones.find(
      (sesion) => sesion.id === selectedSessionId //está tomando la sesion seleccionada como objeto a partir de la id de sesion seleccionada en el select
    );
    console.log("selectedSession", selectedSession); // es un objeto
    valorPago = selectedSession.valorPago;
    valorSesion = selectedSession.valorSesion;
    fechaPago = selectedSession.fechaPago;
    diaSesion = selectedSession.diaSesion;
  };

  const addSesion = () => {
    console.log("Add sesion", selectedSession);
    //hay que hacer que los datos del formulario carguen una nueva sesion en firestore sesiones

    try {
      addDoc(collection(db, "sesiones"), {
        valorPago: valorPago,
        valorSesion: valorSesion,
        diaSesion: diaSesion,
        fechaPago: fechaPago,
        // pacienteID: selectedSession.pacienteID,
        pacienteID: $idPacienteSeleccionado,
      });
      console.log("sesion agregada");
      Toastify({
        text: "Nueva sesion agregada",
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

  const updateSesion = async (selectedSession) => {
    console.log("Update sesion", selectedSession);
    try {
      await updateDoc(doc(db, "sesiones", selectedSession.id), {
        valorPago: valorPago,
        valorSesion: valorSesion,
        fechaPago: fechaPago,
        diaSesion: diaSesion,
      });
      Toastify({
        text: `sesion actualizada`,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSesion = async (selectedSession) => {
    console.log("Delete sesion", selectedSession);
    try {
      await deleteDoc(doc(db, "sesiones", selectedSession.id));
      Toastify({
        text: "Sesion eliminada",
        style: {
          background: "red",
        },
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

  /*
Las variables de los inputs del formulario de sesiones:
-valorPago
-valorSesion
-diaSesion
-fechaPago
-pacienteId
*/
  let valorPago = 4500;
  let valorSesion = 5000;
  let diaSesion = new Date().toLocaleDateString();
  let fechaPago = new Date().toLocaleDateString();
</script>

<main>
  <body>
    <h4>Paciente: {$apellidoSeleccionado}, {$nombreSeleccionado}</h4>
    <!-- Este Select va a elegir la sesion por ID de paciente -->
    <div id="select">
      <select
        on:change={handle_onChange_select_sesiones}
        bind:value={selectedSessionId}
        size={5}
      >
        {#each sesiones as sesion}
          {#if Object.values(sesion).includes($idPacienteSeleccionado)}
            <option class="" value={sesion.id}
              >dia sesion: {sesion.diaSesion} - valor sesion: {sesion.valorSesion}
              - dia pago {sesion.fechaPago} - valor pago {sesion.valorPago}
            </option>
          {/if}
        {/each}
      </select>
    </div>
    <!-- Si editStatus está en true, deja ver el formulario para editar/agregar sesiones -->
    {#if editStatus}
      <div id="contenedor-form-sesiones">
        <form on:submit|preventDefault>
          <div id="form-Sesiones">
            <div id="inputsFormSesionesI">
              <label for="valorPago">pago</label><input
                name="valorPago"
                type="number"
                bind:value={valorPago}
                placeholder="Valor pago"
              />
              <label for="valorSesion">valor sesion</label><input
                name="valorSesion"
                type="number"
                bind:value={valorSesion}
                placeholder="Valor sesión"
              />
            </div>
            <div id="inputsFormSesionesD">
              <label for="diaSesion">Dia Sesion</label><input
                name="diaSesion"
                type="date"
                bind:value={diaSesion}
                placeholder="Día sesión"
              />
              <label for="fechaPago">Fecha Pago</label><input
                name="fechaPago"
                type="date"
                bind:value={fechaPago}
                placeholder="Fecha pago"
              />
            </div>
            <div id="botonesFormSesiones" class="buttons">
              <button on:click={updateSesion(selectedSession)}>update</button>
              <button on:click={deleteSesion(selectedSession)}>delete</button>
              <button on:click={addSesion}>Agregar sesión</button>
            </div>
          </div>
        </form>
      </div>
    {/if}
  </body>
</main>

<style>
  * {
    font-family: inherit;
    font-size: inherit;
    margin: 0;
  }

  body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 2fr;
    grid-template-areas:
      "titulo "
      "select "
      "contenedor-form-Sesiones ";
    margin: 0;
    padding: 3px;
  }

  h4 {    
    grid-area: titulo;    
    padding: 2px;    
    background-color:cadetblue;
    color:aliceblue;
    text-shadow: 1px 1px #999;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  h4:hover {
    text-shadow: 2px 2px #ccc;
    background-color: rgb(67, 113, 115);
  }

  #select {
    display: grid;
    grid-area: select;
    place-items: start;
    padding: 3px;
    justify-items: center;
    align-items: start;
    background-color: cadetblue;
  }

  #contenedor-form-sesiones {
    display: grid;
    grid-area: contenedor-form-Sesiones;
    place-items: start;
    padding: 2px;
    justify-items: center;
    align-items: start;
    background-color: cadetblue;
  }

  #form-Sesiones {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      "inputsFormSesionesI inputsFormSesionesD"
      "botonesFormSesiones botonesFormSesiones";
  }

  #inputsFormSesionesI {
    grid-area: inputsFormSesionesI;
    display: flex;
    flex-direction: column;
    align-items: normal;
    padding: 3px;
  }

  #inputsFormSesionesD {
    grid-area: inputsFormSesionesD;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 3px;
  }

  #inputsFormSesionesI input,
  #inputsFormSesionesD input {
    width: 80%;
    text-align: end;
    padding-top: 3px;
  }

  #inputsFormSesionesI label,
  #inputsFormSesionesD label {
    font-size: smaller;
    color: aliceblue;
    text-align: end;
    max-width: 80%;
    padding-top: 3px;
  }

  #botonesFormSesiones {
    grid-area: botonesFormSesiones;
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3px 1em;
  }

  select {
    max-width: 100%;
    min-width: 100%;
  }

  option {
    font-size: x-small;
  }
</style>
