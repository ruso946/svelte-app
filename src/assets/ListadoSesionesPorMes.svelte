<script>
  import { createEventDispatcher } from "svelte";
  import { querySnapshotPacientes } from "../modulos/moduloConsultasBBDD";
  import SelectMeses from "./SelectMeses.svelte";
  export let mesSeleccionado;
  export let vistaCalculos;
  export let arrayParaLaVista;
  import "boxicons/css/boxicons.min.css";

  let vistaTotales = false;

  const dispatch = createEventDispatcher();

  function formatear(valor, cantidadCaracteres, inicio) {
    //inicio = true pone los caracteres de relleno al inicio, inicio=false, pone los caracteres al final
    let cadena = String(valor); // Convertir el valor a cadena
    if (cadena.length > cantidadCaracteres) {
      cadena = cadena.slice(0, cantidadCaracteres); // Cortar la cadena a los primeros 10 caracteres
    } else if (cadena.length < cantidadCaracteres && inicio) {
      cadena = cadena.padStart(cantidadCaracteres, "_"); // Agregar espacios a la izquierda hasta completar 10 caracteres
    } else if (cadena.length < cantidadCaracteres && !inicio) {
      cadena = cadena.padEnd(cantidadCaracteres, "_"); // Agregar espacios a la derecha hasta completar 10 caracteres
    }
    return cadena;
  }

  const calculaTotales = (arrayParaLaVista) => {
    var totalColPagos = 0;
    var totalColValorSesion = 0;
    console.log(arrayParaLaVista);
    arrayParaLaVista.forEach((element) => {
      totalColPagos += element.valorPago;
      totalColValorSesion += element.valorSesion;
    });
    return {
      totalColPagos: totalColPagos,
      totalColValorSesion: totalColValorSesion,
    };
  };

  const handleMostrarVista = (mes) => {
    if (vistaCalculos == false) {
      dispatch("vistaPulsado", mes);
      mesSeleccionado = mes;
      vistaCalculos = !vistaCalculos;
    } else {
      dispatch("vistaPulsado", mes);
      mesSeleccionado = mes;
    }
    console.log(
      calculaTotales(arrayParaLaVista),
      `mes: ${mesSeleccionado}, cant de sesiones: ${arrayParaLaVista.length}`
    );
  };

  const handleCambioMes = (mes) => {
    mesSeleccionado = mes;
    handleMostrarVista(mes);
  };

  function compararPorPlan(a, b) {
    const planA = a.plan.toUpperCase();
    const planB = b.plan.toUpperCase();

    if (planA < planB) {
      return -1;
    }
    if (planA > planB) {
      return 1;
    }

    return 0;
  }

  function compararPorApellido(a, b) {
    const apellidoA = `${a.apellido}, ${a.nombre}`.toUpperCase();
    const apellidoB = `${b.apellido}, ${b.nombre}`.toUpperCase();

    if (apellidoA < apellidoB) {
      return -1;
    }
    if (apellidoA > apellidoB) {
      return 1;
    }

    return 0;
  }

  function compararPorDiaSesion(a, b) {
    const diaA = a.diaSesion.toUpperCase();
    const diaB = b.diaSesion.toUpperCase();

    if (diaA < diaB) {
      return -1;
    }
    if (diaA > diaB) {
      return 1;
    }

    return 0;
  }

  let orden = "diaSesion";
  let indice = 0;

  // Ordenar el array de objetos por nombre
  function ordenaPorApellido() {
    arrayParaLaVista.sort(compararPorApellido);
    arrayParaLaVista = arrayParaLaVista;
    orden = "apellido";
  }

  function ordenaPorPlan() {
    arrayParaLaVista.sort(compararPorPlan);
    arrayParaLaVista = arrayParaLaVista;
    orden = "plan";
  }

  function ordenaPorDiaSesion() {
    arrayParaLaVista.sort(compararPorDiaSesion);
    arrayParaLaVista = arrayParaLaVista;
    orden = "diaSesion";
  }

  // function calcularSubtotales(orden) {
  //   const subArraySubTotales = arrayParaLaVista.filter(
  //     (sesion) => sesion[orden] === arrayParaLaVista[indice][orden]
  //   );
  // }

  function calcularSubtotales(orden, i) {
    const subArraySubTotales = arrayParaLaVista.filter(
      (sesion) => sesion[orden] === arrayParaLaVista[i - 1][orden]
    );
    console.log(subArraySubTotales);

    // Calcula el subtotal de la suma de valorPago
    const subtotalPagos = subArraySubTotales.reduce(
      (total, sesion) => total + sesion.valorPago,
      0
    );

    // Calcula el subtotal de la suma de valorSesion
    const subtotalValorSesion = subArraySubTotales.reduce(
      (total, sesion) => total + sesion.valorSesion,
      0
    );

    const cantSesiones = subArraySubTotales.length;

    return { subtotalPagos, subtotalValorSesion, cantSesiones };
  }
</script>

<SelectMeses on:cambioMes={(e) => handleCambioMes(e.detail)} />
<div class="listadoSesionesPorMes">
  {#if vistaCalculos && arrayParaLaVista.length > 0}
    <button on:click={() => (vistaCalculos = !vistaCalculos)}>Cerrar</button>
    <button on:click={ordenaPorApellido}>ordena por nombre</button>
    <button on:click={ordenaPorPlan}>ordena por OS</button>
    <button on:click={ordenaPorDiaSesion}>ordena por fecha sesion</button>
    <div id="tabla">
      <table>
        <tr class="cabecera">
          <th>n°</th>
          <th>dia</th>
          <th>paciente</th>
          <th>plan</th>
          <th>pago</th>
          <th>sesion</th>
        </tr>

        <tbody>
          {#each arrayParaLaVista as item, indice}
            {#if (indice > 1 && arrayParaLaVista[indice - 1][orden] != item[orden]) || indice === arrayParaLaVista.length}
              <tr class="subtotalRow">
                <td /><td /><td
                  >{`cant sesiones: ${
                    calcularSubtotales(orden, indice).cantSesiones
                  }`}</td
                ><td>subtotales</td><td
                  >{calcularSubtotales(orden, indice).subtotalPagos}</td
                ><td>{calcularSubtotales(orden, indice).subtotalValorSesion}</td
                >
              </tr>
            {/if}

            {#if indice < arrayParaLaVista.length && item.nombre != "ultimo"}
              <tr>
                <td>{indice + 1}</td>
                <td class="dia"
                  >{`${formatear(item.diaSesion.slice(8, 10), 2, false)}`}</td
                >
                <td class="nombre">{`${item.apellido}, ${item.nombre}`}</td>
                <td class="plan">{item.plan.slice(0, 4)}</td>
                <td>{item.valorPago}</td>
                <td>{item.valorSesion}</td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>

    <div class="row">
      <div class="col col-2 px-2 mt-3">
        <button class="" on:click={() => (vistaCalculos = !vistaCalculos)}
          >Cerrar</button
        >
      </div>
      <div class="col col-1 px-2 mt-3">
        <button
          class="transparente"
          on:click={() => (vistaTotales = !vistaTotales)}
        >
          <i class="bx bx-show" />
          <!-- Icono del ojo cerrado -->
        </button>
      </div>
      {#if vistaTotales}
        <div class="bordeTotales col col-8 m-3 p-2">
          <h6 class="row px-2">
            Total pagos: ${calculaTotales(arrayParaLaVista).totalColPagos}
          </h6>
          <h6 class="row px-2">
            Total valor sesion: ${calculaTotales(arrayParaLaVista)
              .totalColValorSesion}
          </h6>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .listadoSesionesPorMes {
    font-family: "Courier New", Courier, monospace;
    font-size: x-small;
    text-align: left;
    color: #ccc7c7;
    background-color: rgb(50, 47, 47);
  }

  .transparente {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .bordeTotales {
    border-style: solid;
    border-width: 3px;
    border-color: #3e5947;
    color: rgb(151, 36, 36);
    background-color: rgb(42, 18, 9);
  }

  h6 {
    color: rgb(151, 36, 36);
  }

  button {
    background-color: #0d2411; /* Color de fondo en rojo */
    color: #0a8056;
  } 
 
  #tabla {
    overflow-x: auto;
    text-align: right;
  }

  .nombre {
    text-align: left;
  }

  .dia,
  .plan {
    text-align: center;
  }

  tbody {
    overflow: auto;
  }
  table,
  th,
  td {
    border: 1px solid;
    border-collapse: collapse;
    border-color: #3e5947;
  }
  th {
    text-align: center;
  }

  th,
  td {
    padding: 5px;
  }

  tr:hover {
    background-color: rgb(42, 18, 9);
  }

  .subtotalRow {
    color: rgb(151, 36, 36);
    background-color: rgb(42, 18, 9);
  }

  /* .listadoSesionesPorMes { */
  #tabla {
    height: 300px; /* Establece la altura fija deseada */
    overflow-y: auto; /* Activa el scroll vertical si es necesario */
  }

  .cabecera {
    color: #3e5947;
    position: sticky;
    top: 0;
    background-color: rgb(
      42,
      18,
      9
    ); /* Cambia el color de fondo de la cabecera si es necesario */
    z-index: 1;
  }

  /* Cambiar el estilo de la barra de desplazamiento */
  ::-webkit-scrollbar {
    width: 3px; /* Ancho de la barra de desplazamiento */
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

  /* tr:nth-child(even) {
        background-color: #131313;
    } */
  /* body.dark-theme {
  --main-color       : #404040;
  --title-color      : #EFF3F5;
  --text-color       : #8C8C8C;
  --light-text-color : #A0A7AC;
  --border-color     : #3E5947;
  --container-color  : #368F51;
  --body-color       : #192229;
}   */
</style>
