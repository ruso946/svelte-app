<script>
  import { onMount } from "svelte";
  import Toastify from "toastify-js";
  import "sweetalert2/src/sweetalert2.scss";
  import { db } from "./configFirebase/firebasePacientes";
  // import {devuelveFechaActual,
  // } from "./modulos/moduloSesiones";

  // console.log(devuelveFechaActual()); // para probar el objeto de fechas que devuelve la funcion pasada al modulo

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
  export let pacientes; // array que va a usarse para suscribirse a la db Pacientes.
  export let planes; // array que va a usarse para suscribirse a la db planes.
  export let planSeleccionado;  //objeto que pasa el plan seleccionado en SelectPlan.svelte
  let mesSeleccionado; // variable para hacer el bind:value en el select de meses
  import {
    idPacienteSeleccionado,
    apellidoSeleccionado,
    nombreSeleccionado,
  } from "./store";
  import VisualizarRegistros from "./assets/VisualizarRegistros.svelte";

  //obtiene la fecha actual
  const fechaActual = new Date();

  // Obtiene el mes y año actual
  let mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que se suma 1
  let anioActual = fechaActual.getFullYear();
  let meses = [
    {
      nro: 1,
      nombre: "enero",
    },
    {
      nro: 2,
      nombre: "febrero",
    },
    {
      nro: 3,
      nombre: "marzo",
    },
    {
      nro: 4,
      nombre: "abri",
    },
    {
      nro: 5,
      nombre: "mayo",
    },
    {
      nro: 6,
      nombre: "junio",
    },
    {
      nro: 7,
      nombre: "julio",
    },
    {
      nro: 8,
      nombre: "agosto",
    },
    {
      nro: 9,
      nombre: "setiembre",
    },
    {
      nro: 10,
      nombre: "octubre",
    },
    {
      nro: 11,
      nombre: "noviembre",
    },
    {
      nro: 12,
      nombre: "diciembre",
    },
  ];

  let selectedSessionId;
  let selectedSession;
  let totalPagos = 0;

  $: console.log(
    "luego de las subscripciones a pacientes, planes y sesiones: sesiones>",
    sesiones,
    "pacientes>",
    pacientes,
    "planes>",
    planes
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
    console.log(`planSeleccionado: ${planSeleccionado}`)
    if (typeof planSeleccionado.plan === "undefined" || planSeleccionado.plan == "particular" || !planSeleccionado) {
      valorSesion = selectedSession.valorSesion;
      console.log("particular", valorSesion);
    } else {      
      valorSesion = planSeleccionado.valorCoseguro + planSeleccionado.valorOs;
      console.log("OS", valorSesion);
    }
    
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

  // Formatea el mes y año actual en el formato "aaaa-mm"
  let mesActualFormateado = mesActual.toString().padStart(2, "0");
  let anioActualFormateado = anioActual.toString();

  //$: mesActualFormateado = mesActual.toString().padStart(2, "0");

  // Crea las fechas de inicio y fin del mes actual
  let fechaInicioMes = `${anioActualFormateado}-${mesActualFormateado}-01`;
  let fechaFinMes = `${anioActualFormateado}-${mesActualFormateado}-31`;

  const obtenerRegistrosMesActual = async () => {
    // esta funcion obtiene en la variable totalPagos, la suma de los pagos
    if (!mesSeleccionado) {
      mesSeleccionado = mesActual;
    }
    const sesionesRef = collection(db, "sesiones"); // de las sesiones del mes actual (el seleccionado en el select de meses)
    console.log(`mesActual ${mesActual} - mesSeleccionado ${mesSeleccionado} `); // mas los pagos que hace la OS por cada sesion

    mesActualFormateado = mesActual.toString().padStart(2, "0");
    var mesSeleccionadoFormateado = mesSeleccionado.toString().padStart(2, "0");
    console.log(
      `mesActualFormateado ${mesActualFormateado} - mesSeleccionadoFormateado ${mesSeleccionadoFormateado}`
    );
    if (mesActual != mesSeleccionado) {
      fechaInicioMes = `${anioActualFormateado}-${mesSeleccionadoFormateado}-01`;
      fechaFinMes = `${anioActualFormateado}-${mesSeleccionadoFormateado}-31`;
    } else {
      fechaInicioMes = `${anioActualFormateado}-${mesActualFormateado}-01`;
      fechaFinMes = `${anioActualFormateado}-${mesActualFormateado}-31`;
    }
    // Filtra las sesiones utilizando la función "where" de Firestore
    const consultaMesActual = query(
      sesionesRef,
      where("diaSesion", ">=", fechaInicioMes),
      where("diaSesion", "<=", fechaFinMes)
    );

    try {
      const querySnapshotConsultaMesActual = await getDocs(consultaMesActual);

      // Itera sobre los documentos y extrae los datos de las sesiones
      const sesionesPorMesActual = querySnapshotConsultaMesActual.docs.map(
        (sesionMesActual) => sesionMesActual.data()
      );
      console.log("sesiones por mes actual", sesionesPorMesActual);

      // Calcula la suma de los pagos
      totalPagos = 0;
      querySnapshotConsultaMesActual.forEach((sesionMesActual) => {
        //  por cada sesion de la consulta de sesiones del mes actual:
        //  console.log(pacientes);
        let pacienteActualID = sesionMesActual.data().pacienteID; //  primero obtiene el ID del paciente de la sesion en la que está iterando
        const pacienteActual = pacientes.find(
          //  para poder obtener el objeto paciente corespondiente
          (paciente) => paciente.id == pacienteActualID
        );
        //obtenerRegistrosMesActual;

        console.log(pacienteActual);

        var pagoSesion = sesionMesActual.data().valorPago;
        if (pagoSesion == null) {
          pagoSesion = 0;
        }
        if (typeof pagoSesion === "number") {
          // if (typeof pagoSesion === "number" || pagoSesion == null) {
          if (pacienteActual.plan == "particular") {
            totalPagos += pagoSesion;
            console.log(
              `paciente ${pacienteActual.apellido}, valor pago ${
                sesionMesActual.data().valorPago
              }, total acumulado ${totalPagos}`
            );
          } else {            
            const planActual = pacienteActual.plan; // obtiene el plan del placiente por el que itera
            console.log("planPacienteActual", planActual);
            // var planActual = planes.find(
            //   // busca el plan en la coleccion de planes para
            //   (plan) => plan.plan == planPacienteActual
            // ); // obtener el objeto plan correspondiente a la db planes
            console.log(
              `planActual ${planActual} - pagoSesion ${pagoSesion} - planActual.valorOs ${planActual.valorOs}`
            );
            totalPagos += planActual.valorOs + pagoSesion; // suma el valor del pago mas el valor que paga la Os
            console.log(
              `paciente ${pacienteActual.apellido}, fechaSesion: ${
                sesionMesActual.data().diaSesion
              }, valor Os + Coseguro$${
                planActual.valorOs + planActual.valorCoseguro
              }, total acumulado ${totalPagos}`
            );
          }
        }
      });

      console.log("Total pagos mes actual: ", totalPagos);

      // Retorna las sesiones obtenidas y el total de los pagos
      return totalPagos;
    } catch (error) {
      console.error("Error al obtener las sesiones y los pagos:", error);
      return [];
    }
  };

  //funcion que obtiene la suma de los valores de los pagos, quizas no tenga sentido
  const sumaValorPagoTotal = () => {
    return sesiones.reduce((sum, pago) => sum + pago.valorPago, 0);
  };

  $: sumaValorPagoTotal(); // quizas esta linea no tenga sentido

  $: obtenerRegistrosMesActual();

  // const sumaValorPagoPorPaciente = obtenerRegistrosMesActual("pepe", mesSeleccionado) ;
  const sumaValorPagoPorPaciente = (pacienteID) => {
    // obtiene la suma de los pagos de los valores por el paciente seleccionado
    // que está en el store.js, y filtrando tambien por mes actual
    //console.log("sesiones[0][diaSesion].slice(5,7)",sesiones[0][diaSesion].slice(5, 7), "mesActual",mesActual.toString().padStart(2, "0"));
    const sesionesFiltradas = sesiones.filter(
      (sesion) =>
        sesion.pacienteID === pacienteID &&
        sesion.diaSesion.slice(5, 7) ===
          mesSeleccionado.toString().padStart(2, "0")
    );
    return sesionesFiltradas.reduce((sum, pago) => sum + pago.valorPago, 0);
  };

  $: sumaValorPagoPorPaciente($idPacienteSeleccionado);
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
          {#if Object.values(sesion).includes($idPacienteSeleccionado) && sesion.diaSesion.slice(5, 7) == mesSeleccionado}
            <option class="" value={sesion.id}
              >dia sesion: {sesion.diaSesion} - valor sesion: {sesion.valorSesion}
              - dia pago {sesion.fechaPago} - valor pago {sesion.valorPago}
            </option>
          {/if}
        {/each}
      </select>

      <VisualizarRegistros
        registrosMesActual={totalPagos}
        {sumaValorPagoPorPaciente}
      />
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
              <select
                on:change={obtenerRegistrosMesActual}
                bind:value={mesSeleccionado}
                name="mes"
                id="mesRegistro"
              >
                {#each meses as mes}
                  <option value={mes.nro}
                    >{`${mes.nro.toString().padStart(2, "0")} - ${
                      mes.nombre
                    }`}</option
                  >
                {/each}
              </select>
              <!-- {@debug mesSeleccionado, mesActual} -->
              <button on:click={() => obtenerRegistrosMesActual()}
                >registros mes {mesSeleccionado}</button
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
