<script>
  import { onMount } from "svelte";
  import Toastify from "toastify-js";
  import "sweetalert2/src/sweetalert2.scss";
  import { db } from "./firebasePacientes";

  import {
    collection,
    query,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    orderBy,
    updateDoc,
    where,
    getDocs,
  } from "firebase/firestore";

  export let sesiones; // array que va a usarse para suscribirse a la db sesiones.
  let pacientes; // array que va a usarse para suscribirse a la db Pacientes.
  let planes; // array que va a usarse para suscribirse a la db planes.
  import {
    idPacienteSeleccionado,
    apellidoSeleccionado,
    nombreSeleccionado,
  } from "./store";

  //este onMount hace una suscripcion a las db "Pacientes", "planes" y "sesiones"  

  onMount(() => {
    const unsubscribeFunctions = [];
    const sesionesRef = collection(db, "sesiones");
    const pacientesRef = collection(db, "Pacientes");
    const planesRef = collection(db, "planes");
    const qs = query(sesionesRef, orderBy("diaSesion"));
    const qp = query(pacientesRef, orderBy("apellido"));
    const qplanes = query(planesRef, orderBy("plan"));

    //hacer una consulta de suscripcion por mes para sacar el total por mes
    //por paciente y por todas las sesiones del mes

    const unsubscribeSesiones = onSnapshot(qs, (snapshot) => {
      sesiones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const compararPorDiaSesion = (sesion1, sesion2) => {
        //funcion para ordenar con pacientes.sort()
        if (sesion1.diaSesion < sesion2.diaSesion) {
          return -1;
        }
        if (sesion1.diaSesion > sesion2.diaSesion) {
          return 1;
        }
        return 0;
      };
      sesiones.sort(compararPorDiaSesion); // ordena los pacientes por orden alfabetico de apellido
    });

    console.log("desde onMount CRUDSesiones", sesiones);
    unsubscribeFunctions.push(unsubscribeSesiones);

    const unsubscribePacientes = onSnapshot(qp, (snapshot) => {
      pacientes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    const unsubscribePlanes = onSnapshot(qplanes, (snapshot) => {
      planes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    unsubscribeFunctions.push(unsubscribePacientes);
    unsubscribeFunctions.push(unsubscribePlanes);

    return () => {
      unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    };
  });

  //obtiene la fecha actual
  const fechaActual = new Date();

  // Obtiene el mes y año actual
  let mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que se suma 1  
  let anioActual = fechaActual.getFullYear();
  let months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "setiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  let selectedSessionId;
  let selectedSession;

  $: console.log(
    "luego de las subscripciones a pacientes y sesiones: sesiones>",
    sesiones,
    "pacientes>",
    pacientes
  );

  $: {
    selectedSession = sesiones.find(
      (sesion) => sesion.id === selectedSessionId //está tomando la sesion seleccionada como objeto a partir de la id de sesion seleccionada en el select
    );
    console.log(selectedSession ? selectedSession : "sin seleccion de sesion");
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

  const addSesion = async () => {
    console.log("Add sesion", selectedSession);
    //hay que hacer que los datos del formulario carguen una nueva sesion en firestore sesiones

    try {
      const docRef = await addDoc(collection(db, "sesiones"), {
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
      selectedSessionId = docRef.id;
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

  const depurarSesiones = () => {
    const arrayIdPacientes = [];
    pacientes.forEach((paciente) => {
      arrayIdPacientes.push(paciente.id);
    });
    console.log(arrayIdPacientes);

    /*
      hacer un array de todas las id de pacientes
      por cada sesion, si el id de paciente de esa sesion(pacienteID), no esta en el array de idPacientes
      hay que borrar esa sesion
      */
    sesiones.forEach((sesion) => {
      if (!arrayIdPacientes.includes(sesion.pacienteID)) {
        console.log(
          `en la sesion ${sesion.id},el paciente ${sesion.pacienteID} no está incluido en el array pacientes, hay que borrarla`
        );
        try {
          deleteDoc(doc(db, "sesiones", sesion.id));
          Toastify({
            text: "Sesion eliminada",
            style: {
              background: "red",
            },
          }).showToast();
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  /*
Las variables de los inputs del formulario de sesiones:
-valorPago
-valorSesion
-diaSesion
-fechaPago
-pacienteId
*/
  let valorPago = 5000;
  let valorSesion = 5000;
  let diaSesion = new Date().toISOString().slice(0, 10); //new Date().toLocaleDateString();
  let fechaPago = new Date().toISOString().slice(0, 10);
  ///////////////////////////////////////////////////////////////
  //para hacer consultas que obtienen totales por mes actual:  //
  ///////////////////////////////////////////////////////////////

  const obtenerRegistrosMesActual = async () => {
    const sesionesRef = collection(db, "sesiones");
    // Formatea el mes y año actual en el formato "aaaa-mm"
    const mesActualFormateado = (mesActual).toString().padStart(2, "0");
    const mesActualFormateado = (mesActual).toString().padStart(2, "0");
    const anioActualFormateado = anioActual.toString();

    // Crea las fechas de inicio y fin del mes actual
    const fechaInicioMes = `${anioActualFormateado}-${mesActualFormateado}-01`;
    const fechaFinMes = `${anioActualFormateado}-${mesActualFormateado}-31`;

    // Filtra las sesiones utilizando la función "where" de Firestore
    const consultaMesActual = query(
      sesionesRef,
      where("diaSesion", ">=", fechaInicioMes),
      where("diaSesion", "<=", fechaFinMes)
    );

    try {
      const querySnapshot = await getDocs(consultaMesActual);

      // Itera sobre los documentos y extrae los datos de las sesiones
      const sesionesPorMesActual = querySnapshot.docs.map((doc) => doc.data());
      console.log("sesiones por mes actual", sesionesPorMesActual);

      // Calcula la suma de los pagos
      let totalPagos = 0;
      querySnapshot.forEach((doc) => {
        console.log(pacientes);
        let pacienteActualID = doc.data().pacienteID;
        const pacienteActual = pacientes.find(
          (paciente) => paciente.id == pacienteActualID
        );

        console.log(pacienteActual);

        const pagoSesion = doc.data().valorPago;
        if (typeof pagoSesion === "number" || pagoSesion == null) {
          if (pacienteActual.plan == "particular") {
            totalPagos += pagoSesion;
            console.log(
              `paciente ${pacienteActual.apellido}, valor pago ${
                doc.data().valorPago
              }, total acumulado ${totalPagos}`
            );
          } else {
            totalPagos += 2700; //aca esta simplificado. Hay que armar la logica de tomar los valores por plan dela db
            console.log(
              `paciente ${pacienteActual.apellido}, valor pago 2700, total acumulado ${totalPagos}`
            );
          }
        }
      });

      console.log("Total pagos mes actual: ", totalPagos);
      const pTotalPagos = document.querySelector("#totalGeneral");
      pTotalPagos.innerHTML = "total mes: $" + totalPagos.toString();

      // Retorna las sesiones obtenidas y el total de los pagos
      return totalPagos;
    } catch (error) {
      console.error("Error al obtener las sesiones y los pagos:", error);
      return [];
    }
  };

  //funcion que obtiene la suma de los valores de los pagos
  const sumaValorPagoTotal = () => {
    return sesiones.reduce((sum, pago) => sum + pago.valorPago, 0);
  };

  $: sumaValorPagoTotal();

  $: obtenerRegistrosMesActual();

  const sumaValorPagoPorPaciente = (pacienteID) => {
    const sesionesFiltradas = sesiones.filter(
      (sesion) => sesion.pacienteID === pacienteID
    );
    return sesionesFiltradas.reduce((sum, pago) => sum + pago.valorPago, 0);
  };

  $: sumaValorPagoPorPaciente($idPacienteSeleccionado);
  //funcion que obtiene la suma de los valores de las sesiones
</script>

<main>
  <body>
    <h4>Paciente: {$apellidoSeleccionado}, {$nombreSeleccionado}</h4>
    <!-- Este Select va a elegir la sesion por ID de paciente -->
    <div id="select">
      <select
        id="select-sesiones"
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
      <!-- {#await obtenerRegistrosMesActual}
  esperando...
{:then res}  -->
      <p id="totalGeneral">total general:{obtenerRegistrosMesActual()}</p>
      <p>
        total por paciente:{sumaValorPagoPorPaciente($idPacienteSeleccionado)}
      </p>
      <!-- {/await} -->
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
                step="100"
                min="0"
                bind:value={valorPago}
                placeholder="Valor pago"
              />
              <label for="valorSesion">valor sesion</label><input
                name="valorSesion"
                type="number"
                step="100"
                min="0"
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
              <button on:click={() => updateSesion(selectedSession)}
                >update</button
              >
              <button on:click={() => deleteSesion(selectedSession)}
                >delete</button
              >
              <button on:click={addSesion}>Agregar sesión</button>
              <select bind:value={mesActual} name="mes" id="mesRegistro">
                {#each months as month, i}
                  {#if (i+1 == mesActual)}
                    <option selected value={(i + 1)}
                      >{`${(i+1).toString().padStart(2, "0")} - ${month}`}</option
                    >
                  {:else}
                    <option value={(i + 1)}
                      >{`${(i+1).toString().padStart(2, "0")} - ${month}`}</option
                    >
                  {/if}
                {/each}
              </select>

              <button on:click={() => obtenerRegistrosMesActual()}
                >registros mes {months[mesActual-1]}</button
              >
              <!-- este boton de depurar sesiones solo se debe activar en casos extremos. Borra sesiones de pacientes inexistentes directamente de la base de datos -->
              <!-- deberia reemplazarse por la opcion de actvar/desactivar un paciente con un campo, y sus respectivas sesiones -->
              <!-- <button on:click={depurarSesiones}>Depurar sesiones</button> -->
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
    background-color: cadetblue;
    color: aliceblue;
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

  #select-sesiones {
    max-width: 100%;
    min-width: 100%;
    font-size: x-small;
  }

  option {
    font-size: x-small;
  }

  #mesRegistro {
    width: 100px;
  }
</style>
