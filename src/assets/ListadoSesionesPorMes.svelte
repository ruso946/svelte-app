<script>
  import { createEventDispatcher } from "svelte";
  import { querySnapshotPacientes } from "../modulos/moduloConsultasBBDD";
  import SelectMeses from "./SelectMeses.svelte";
  export let mesSeleccionado;
  export let vistaCalculos;
  export let arrayParaLaVista;

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
    const apellidoA = a.apellido.toUpperCase();
    const apellidoB = b.apellido.toUpperCase();

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

  let orden="dia";

  // Ordenar el array de objetos por nombre
  function ordenaPorNombre(){
    arrayParaLaVista.sort(compararPorApellido);
    arrayParaLaVista = arrayParaLaVista;
    orden="apellido"
  }

  function ordenaPorPlan(){
    arrayParaLaVista.sort(compararPorPlan);
    arrayParaLaVista = arrayParaLaVista;
    orden="plan";
  }

  function ordenaPorDiaSesion(){
    arrayParaLaVista.sort(compararPorDiaSesion);
    arrayParaLaVista = arrayParaLaVista;
    orden = "dia";
  }
  
</script>

<SelectMeses on:cambioMes={(e) => handleCambioMes(e.detail)} />
<div class="listadoSesionesPorMes">
  {#if vistaCalculos && arrayParaLaVista.length > 0}
    <button on:click={() => (vistaCalculos = !vistaCalculos)}>Cerrar</button>
    <button on:click={ordenaPorNombre}>ordena por nombre</button>
    <button on:click={ordenaPorPlan}>ordena por OS</button>
    <button on:click={ordenaPorDiaSesion}>ordena por fecha sesion</button>
    <div id="tabla">
      <table>
        <tr>
          <th>n°</th>
          <th>dia</th>
          <th>paciente</th>
          <th>plan</th>
          <th>sesion</th>
          <th>pago</th>
        </tr>
        <tbody>
          {#each arrayParaLaVista as item, indice}
          
          {#if orden=="dia" && indice>1 && arrayParaLaVista[indice-1].diaSesion != item.diaSesion}
            <td>acá un corte</td>
          {/if}
          {#if orden=="apellido" && indice>1 && arrayParaLaVista[indice-1].apellido != item.apellido}
            <td>acá un corte</td>
          {/if}
          {#if orden=="plan" && indice>1 && arrayParaLaVista[indice-1].plan != item.plan}
            <td>acá un corte</td>
          {/if}
            <tr>
              <td>{indice}</td>
              <td class="dia"
                >{`${formatear(item.diaSesion.slice(8, 10), 2, false)}`}</td
              >
              <td class="nombre">{`${item.apellido}, ${item.nombre}`}</td>
              <td class="plan">{item.plan.slice(0, 4)}</td>
              <td>{item.valorPago}</td>
              <td>{item.valorSesion}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <p class="centrar">
      Total pagos: ${calculaTotales(arrayParaLaVista).totalColPagos}
    </p>
    <p class="centrar">
      Total valor sesion: ${calculaTotales(arrayParaLaVista)
        .totalColValorSesion}
    </p>

    <button on:click={() => (vistaCalculos = !vistaCalculos)}>Cerrar</button>
  {/if}
</div>

<style>
  .listadoSesionesPorMes {
    font-family: "Courier New", Courier, monospace;
    font-size: x-small;
    text-align: left;
    color: #8C8C8C;
    background-color: rgb(50, 47, 47);
  }

  .centrar {
    text-align: center;
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
    border-color: #3E5947;
  }
  th {
    text-align: center;
  }

  th,
  td {
    padding: 5px;
  }

  tr:hover {
    background-color: rgb(51, 24, 14);
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



