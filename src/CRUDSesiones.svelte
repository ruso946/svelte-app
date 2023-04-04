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

  $: console.log(
    "luego de las subscripciones a pacientes y sesiones",
    sesiones,
    pacientes
  );

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
    const selectedSessionId = e.target.value;
    console.log(selectedSessionId);
    console.log(sesiones);
    const selectedSession = sesiones.find(
      (sesion) => sesion.id === selectedSessionId
    );
    console.log("selectedSession", selectedSession);
    valorPago = selectedSession.valorPago;
    valorSesion = selectedSession.valorSesion;
    fechaPago = selectedSession.fechaPago;
    diaSesion = selectedSession.diaSesion;
  };

  const addSesion = async(sesion) => {
    console.log("Add sesion", sesion.event.formData());
    //hay que hacer que los datos del formulario carguen una nueva sesion en firestore sesiones


    try {
			await addDoc(collection(db, "sesiones"), {
				valorPago: sesion.valorPago,
        valorSesion: sesion.valorSesion,
        diaSesion: sesion.diaSesion,
        fechaPago: sesion.fechaPago,
        pacienteID: idPacienteSeleccionado
			});
			console.log("sesion agregadao");
			Toastify({
				text: "Nueva sesion agregada",
			}).showToast();
		} catch (error) {
			console.error(error);
		}
	};
  
  const updateSesion = () => {
    console.log("Update sesion");
  };
  const deleteSesion = () => {
    console.log("Delete sesion");
  };

  /*
Las variables de los inputs del formulario de sesiones:
-valorPago
-valorSesion
-diaSesion
-fechaPago
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
      bind:value={$idPacienteSeleccionado}
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
      <form class="formSesiones" on:submit|preventDefault={addSesion}>
        <input type="text" bind:value={valorPago} placeholder="Valor pago" />
        <input
          type="text"
          bind:value={valorSesion}
          placeholder="Valor sesión"
        />
        <input type="text" bind:value={diaSesion} placeholder="Día sesión" />
        <input type="text" bind:value={fechaPago} placeholder="Fecha pago" />
        <!-- <input
          type="text"
          bind:value={$apellidoSeleccionado}
          placeholder="Apellido y nombre del paciente"
        /> -->
        <div class="buttons mt-3 p-2">
          <button type="submit">Agregar sesión</button>
        </div>
      </form>

      <div class="buttons mt-3 p-2">
        <button on:click={updateSesion}>update</button>
        <button on:click={deleteSesion}>delete</button>
      </div>
    </div>
  {/if}
</main>

<style>
  .formSesiones {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-start;
  }

  select {
    width: 20em;
  }  
</style>
