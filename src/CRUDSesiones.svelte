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
        pacienteID: selectedSession.pacienteID,
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
      await updateDoc(doc(db, "sesiones", selectedSession.id), {valorPago: valorPago, valorSesion: valorSesion, fechaPago: fechaPago, diaSesion: diaSesion});
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
  <h5>Paciente: {$apellidoSeleccionado}, {$nombreSeleccionado}</h5>
  <!-- Este Select va a elegir la sesion por ID de paciente -->
  <div>
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
    <div>
      <form class="formSesiones" on:submit|preventDefault>
        <input type="text" bind:value={valorPago} placeholder="Valor pago" />
        <input
          type="text"
          bind:value={valorSesion}
          placeholder="Valor sesión"
        />
        <input type="text" bind:value={diaSesion} placeholder="Día sesión" />
        <input type="text" bind:value={fechaPago} placeholder="Fecha pago" />
        <div class="buttons mt-3 p-2">
          <button on:click={addSesion}>Agregar sesión</button>
        </div>
      </form>

      <div class="buttons mt-3 p-2">
        <button on:click={updateSesion(selectedSession)}>update</button>
        <button on:click={deleteSesion(selectedSession)}>delete</button>
      </div>
    </div>
  {/if}
</main>

<style>
  main{
    flex-flow: column wrap;
  }

  .formSesiones {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-start;
  }

  input {
    width: 10em;
  }

  select {
    width: 26em;
  }

  option {
    font-size: x-small;
  }
</style>
