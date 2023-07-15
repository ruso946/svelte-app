<script>
  import Toastify from "toastify-js";
  import "sweetalert2/src/sweetalert2.scss";
  import ListadoSesionesPorMes from "./assets/ListadoSesionesPorMes.svelte";
  import { db } from "./configFirebase/firebasePacientes";
  // import {devuelveFechaActual,    //si lo quiero usar hay que revisarlo. Lo modifiqué para que sirva al nombre del backup de colecciones firestore
  // } from "./modulos/moduloSesiones";

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
    enableMultiTabIndexedDbPersistence,
  } from "firebase/firestore";

  import { querySnapshotConsultaMesActual } from "./modulos/moduloConsultasBBDD";

  export let sesiones; // array que va a usarse para suscribirse a la db sesiones.
  export let pacientes; // array que va a usarse para suscribirse a la db Pacientes.
  export let planes; // array que va a usarse para suscribirse a la db planes.
  export let planSeleccionado; //objeto que pasa el plan seleccionado en SelectPlan.svelte

  import {
    idPacienteSeleccionado,
    apellidoSeleccionado,
    nombreSeleccionado,
  } from "./store";
  import VisualizarRegistros from "./assets/VisualizarRegistros.svelte";
  import SelectorSesiones from "./assets/SelectorSesiones.svelte";

  let vistaCalculos = false;
  let arrayParaLaVista = []; //si no agrego esta definicion de array vacío, entonces no funciona de una el boton del componente ListadoSesionesPorMes porque no toma arrayParaLaVista como un array.
  let varSumaValorPagoPorPaciente; // variable para reflejar la suma por paciente por mes. Se pasa como prop a VisualizarRegistros
  let totalAdeudado = 0;

  //obtiene la fecha actual
  const fechaActual = new Date();

  // Obtiene el mes y año actual
  let mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que se suma 1
  let anioActual = fechaActual.getFullYear();
  let mesSeleccionado = mesActual; // variable para hacer el bind:value en el select de meses

  console.log(`mesSeleccionado ${mesSeleccionado}`);

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
    console.log(e);
    selectedSessionId = e.detail; // está tomando el valor del select al cambiar, que es el Id de sesion seleccionado
    console.log(sesiones);
    selectedSession = sesiones.find(
      (sesion) => sesion.id === selectedSessionId //está tomando la sesion seleccionada como objeto a partir de la id de sesion seleccionada en el select
    );
    console.log("selectedSession", selectedSession); // es un objeto
    valorPago = selectedSession.valorPago;
    console.log(`planSeleccionado: ${planSeleccionado}`);
    if (
      typeof planSeleccionado.plan === "undefined" ||
      planSeleccionado.plan == "particular" ||
      !planSeleccionado
    ) {
      valorSesion = selectedSession.valorSesion;
      console.log("particular", valorSesion);
    } else {
      //valorSesion = planSeleccionado.valorCoseguro + planSeleccionado.valorOs;
      var planActual = planes.find((plan) => plan.plan == planSeleccionado);
      console.log(planActual);
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

  let funcSumaValorPagoPorPaciente = (pacienteID) => {
    // obtiene la suma de los pagos de los valores por el paciente seleccionado
    // que está en el store.js, y filtrando tambien por mes actual
    //console.log("sesiones[0][diaSesion].slice(5,7)",sesiones[0][diaSesion].slice(5, 7), "mesActual",mesActual.toString().padStart(2, "0"));
    const sesionesFiltradas = sesiones.filter(
      (sesion) =>
        sesion.pacienteID === pacienteID &&
        sesion.diaSesion.slice(5, 7) ===
          mesSeleccionado.toString().padStart(2, "0")
    );
    return sesionesFiltradas.reduce((sum, pago) => sum + pago.valorSesion, 0);
  };

  //esta funcion hace el listado de las sesiones por mes en un div al final de la pagina
  //falta darle estilos
  const listarItemsPorMes = async (mes) => {
    mesSeleccionado = mes;
    const arrayListadoItemsPorMes = await obtenerRegistrosMesActual(
      mesSeleccionado
    );
    arrayParaLaVista = arrayListadoItemsPorMes[1];
    arrayParaLaVista.push({apellido: "ultimo", diaSesion: "ultimo", nombre: "ultimo", plan: "ultimo", valorPago: 0, valorSesion: 0})
    console.log(Array.isArray(arrayListadoItemsPorMes[1]));
    console.log(arrayListadoItemsPorMes[1]);
    vistaCalculos = true;
  };

  const obtenerRegistrosMesActual = async (mesSeleccionado) => {
    if (!mesSeleccionado) {
      //si al principio no hay seleccion de select, lo calcula a la fecha de hoy, el mes actual
      mesSeleccionado = mesActual;
    }
    // esta funcion obtiene en la variable totalPagos, la suma de los pagos
    // de las sesiones del mes actual (el seleccionado en el select de meses)
    // mas los pagos que hace la OS por cada sesion

    try {
      // Itera sobre los documentos y extrae los datos de las sesiones
      const sesionesPorMesActual = await querySnapshotConsultaMesActual(
        mesSeleccionado
      );
      // Calcula la suma de los pagos
      totalPagos = 0;
      totalAdeudado = 0;
      let arrayListadoItemsPorMes = [];
      sesionesPorMesActual.forEach((sesionMesActual) => {
        //  por cada sesion de la consulta de sesiones del mes actual:
        //  console.log(pacientes);
        let pacienteActualID = sesionMesActual.pacienteID; //  primero obtiene el ID del paciente de la sesion en la que está iterando
        const pacienteActual = pacientes.find(
          //  para poder obtener el objeto paciente corespondiente
          (paciente) => paciente.id == pacienteActualID
        );
        //console.log(`pacienteActual ${pacienteActual.apellido}, ${pacienteActual.nombre} - plan ${pacienteActual.plan.plan?pacienteActual.plan.plan:"particular"}`);
        var pagoSesion = sesionMesActual.valorPago; // toma el valor del pago de la sesion que está iterando
        if (pagoSesion == null) {
          // lo pasa a valor cero si es null
          pagoSesion = 0;
        }
        if (typeof pagoSesion === "number") {
          if (pacienteActual.plan == "particular") {
            //si el paciente es particular
            totalPagos += pagoSesion; //usa ese valor para sumar al total que está calculando
            if (pagoSesion < valorSesion) {
              totalAdeudado += valorSesion - pagoSesion; //calcula deuda si corresponde
            }
            var objetoParaPushearAlListado = {
              diaSesion: sesionMesActual.diaSesion,
              apellido: pacienteActual.apellido,
              nombre: pacienteActual.nombre,
              plan: pacienteActual.plan.plan
                ? pacienteActual.plan.plan
                : "particular",
              valorPago: pagoSesion,
              valorSesion: sesionMesActual.valorSesion,
            };
            //console.log(objetoParaPushearAlListado);
            arrayListadoItemsPorMes.push(objetoParaPushearAlListado);
          } else {
            // si no es particular, hace la lógica del cálculo
            const planActual = pacienteActual.plan; // primero, obtiene el plan del placiente por el que itera

            var objetoParaPushearAlListado = {
              diaSesion: sesionMesActual.diaSesion,
              apellido: pacienteActual.apellido,
              nombre: pacienteActual.nombre,
              plan: pacienteActual.plan.plan
                ? pacienteActual.plan.plan
                : "particular",
              valorPago: pagoSesion,
              valorSesion: sesionMesActual.valorSesion,
            };

            //console.log(objetoParaPushearAlListado);
            arrayListadoItemsPorMes.push(objetoParaPushearAlListado);

            if (pagoSesion < planActual.valorCoseguro) {
              // si el pago es menor al coseguro, calcula la deuda
              totalAdeudado += planActual.valorCoseguro - pagoSesion;
              //console.log(`totalAdeudado: ${totalAdeudado}`);
            }
            totalPagos += planActual.valorOs + pagoSesion; // suma el valor del pago mas el valor que paga la Os
            // console.log(
            //   `paciente ${pacienteActual.apellido}, fechaSesion: ${
            //     sesionMesActual.diaSesion
            //   }, valor Os + Coseguro$${
            //     planActual.valorOs + planActual.valorCoseguro
            //   }, total acumulado ${totalPagos}`
            // );
          }
        }
      });

      // console.log("Total pagos mes actual: ", totalPagos);
      // console.log("Total adeudado mes actual: ", totalAdeudado);
      varSumaValorPagoPorPaciente = funcSumaValorPagoPorPaciente(
        $idPacienteSeleccionado
      );

      // Retorna las sesiones obtenidas y el total de los pagos
      return [totalPagos, arrayListadoItemsPorMes];
    } catch (error) {
      console.error("Error al obtener las sesiones y los pagos:", error);
      return [];
    }
  };

  $: obtenerRegistrosMesActual();

  $: varSumaValorPagoPorPaciente = funcSumaValorPagoPorPaciente(
    $idPacienteSeleccionado
  );

  /////////////////////////////////////////////////////////////////////////
  const updateSesionPorUnicaVez = async (sesionAmodificar, valorSesionPUV) => {
    console.log("Update sesion", sesionAmodificar, valorSesionPUV);
    try {
      await updateDoc(doc(db, "sesiones", sesionAmodificar.id), {
        //valorPago: valorPago,
        valorSesion: valorSesionPUV,
        //fechaPago: fechaPago,
        //diaSesion: diaSesion,
      });
      Toastify({
        text: `sesion actualizada ${sesionAmodificar.fechaSesion}`,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    } catch (error) {
      console.error(error);
    }
  };

  const actualizaValoresSesionesPorUnicaVez = () => {
    sesiones.forEach((sesion) => {
      //console.log(sesion);

      if (sesion.diaSesion >= "2023-06-01") {
        // buscar plan del paciente de la sesion iterada:
        console.log(`sesion ${sesion.pacienteID} ${sesion.diaSesion}`);
        var pacienteIDx = sesion.pacienteID; //con el ID del paciente de la sesion iterada
        var pacientex = pacientes.find(
          //encuentra el objeto paciente de la suscripcion a la coleccion pacientes
          (pacientexx) => pacientexx.id == pacienteIDx
        );
        console.log(pacientex);
        var planPacientex = pacientex.plan; //plan del paciente de la sesion iterada
        console.log(
          `pacientex ${pacientex.apellido} planpacientex ${planPacientex}`
        );
        if (planPacientex === "particular") {
          //si es un paciente particular
          console.log(
            //el valor de la sesion es el mismo que el de la sesion iterada
            `paciente: ${
              //o sea, sesion.valorSesion
              pacientex.apellido
            }, es particular , valorSesion ${sesion.valorSesion}`
          );
        } else {
          //si es un paciente de Obra Social/Prepaga
          var valorCosegurox = planPacientex.valorCoseguro; //toma el valor del coseguro
          var valorOsx = planPacientex.valorOs; //toma el valor que paga la Os
          var valorSesionx = valorCosegurox + valorOsx; //calcula el valor total de la sesion
          console.log(
            `paciente: ${pacientex.apellido}, plan ${planPacientex.plan}, coseguro ${valorCosegurox}, valorOs ${valorOsx}, valorSesionx ${valorSesionx}`
          );
          //updateSesionPorUnicaVez(sesion, valorSesionx)
        }
      }
    });
  };
</script>

<main>
  <body>
    {#if sesiones.length > 0}
      <div class="tituloSelectorSesiones">
        <h5>{`Mes: ${mesSeleccionado}`}</h5>
        {#if $apellidoSeleccionado && $nombreSeleccionado}
          <p>Paciente: {$apellidoSeleccionado}, {$nombreSeleccionado}</p>
        {/if}
      </div>
      <div class="selectorSesiones">
        <SelectorSesiones
          on:cambioSelectorSesion={handle_onChange_select_sesiones}
          {mesSeleccionado}
          {sesiones}
          {varSumaValorPagoPorPaciente}
        />       
      </div>
      
    {/if}

    <div id="contenedor-form-sesiones">
      <form on:submit|preventDefault>
        <div id="form-Sesiones">
          <div id="inputsFormSesionesI">
            <label for="valorPago">pago</label><input
              name="valorPago"
              id="valorPago"
              type="number"
              step="100"
              min="0"
              bind:value={valorPago}
              placeholder="Valor pago"
            />
            <label for="valorSesion">valor sesion</label><input
              name="valorSesion"
              id="valorSesion"
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
              id="diaSesion"
              type="date"
              bind:value={diaSesion}
              placeholder="Día sesión"
            />
            <label for="fechaPago">Fecha Pago</label><input
              name="fechaPago"
              id="fechaPago"
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
          </div>
          <!-- <select
                on:change={async (e) => listarItemsPorMes(e.target.value)}
                bind:value={mesSeleccionado}
                name="mes"
                id="mesRegistro"
              >
                {#each meses as mes}
                  <option value={mes.nro}
                    >{`listar mes de ${
                      mes.nombre
                    } - ${mes.nro.toString().padStart(2, "0")}`}</option
                  >
                {/each}
              </select> -->
          <!-- <button on:click={async () => listarItemsPorMes(mesSeleccionado)}
                >listar mes {mesSeleccionado}</button
              >               -->
          <!-- este boton de depurar sesiones solo se debe activar en casos extremos. Borra sesiones de pacientes inexistentes directamente de la base de datos -->
          <!-- deberia reemplazarse por la opcion de actvar/desactivar un paciente con un campo, y sus respectivas sesiones -->
          <!-- <button on:click={depurarSesiones}>Depurar sesiones</button> -->
          <!-- <button on:click={actualizaValoresSesionesPorUnicaVez} /> -->
        </div>
      </form>
      <div>
        <ListadoSesionesPorMes
          on:vistaPulsado={async (e) => listarItemsPorMes(e.detail)}
          {vistaCalculos}
          {arrayParaLaVista}
          {mesSeleccionado}
        />
      </div>
    </div>

    <!-- on:vistaPulsado={async () => listarItemsPorMes(mesSeleccionado)} -->
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

  .tituloSelectorSesiones {
    padding: 1em;
    font-family: "Courier New", Courier, monospace;
    text-align: start;
    background-color: rgb(28, 27, 27);
    color: blanchedalmond;
    max-width: 100%;
    width: 100%;
    margin: 0;
    font-size: small;
    white-space: pre;
  }

  .selectorSesiones {
    font-family: "Courier New", Courier, monospace;
    text-align: start;
    height: 10em;
    /* overflow-y: auto; */
    background-color: rgb(28, 27, 27);
    color: blanchedalmond;
    max-width: 100%;
    width: 100%;
    margin: 0;
    font-size: small;
    white-space: pre;
  }

  ::-webkit-scrollbar-track {
    background: rgb(
      41,
      39,
      39
    ); /* Color del fondo de la pista de la barra de desplazamiento */
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Color del pulgar de la barra de desplazamiento */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color del pulgar de la barra de desplazamiento en estado de hover */
  }

  h5 {
    grid-area: titulo;
    padding: 2px;
    background-color: rgb(28, 27, 27);
    color: aliceblue;
    text-shadow: 1px 1px #999;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  button{
    background-color: rgb(58, 49, 49);
    color: rgb(193, 176, 150);
  }  

  #contenedor-form-sesiones {
    display: grid;
    grid-area: contenedor-form-Sesiones;
    place-items: start;
    padding: 2px;
    justify-items: center;
    align-items: start;
    background-color: rgb(58, 78, 78);
    /* margin-bottom: 5px; */
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

  /* #select-sesiones {
    max-width: 100%;
    min-width: 100%;
    font-size: x-small;
  }   */

  input {
    background-color: rgb(58, 78, 78);
    color: blanchedalmond;
  }
</style>
