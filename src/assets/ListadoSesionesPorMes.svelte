<script>
    import { createEventDispatcher } from "svelte";
    import { querySnapshotPacientes } from "../modulos/moduloConsultasBBDD";
    export let mesSeleccionado;
    export let vistaCalculos;
    export let arrayParaLaVista;
    export let totalPagos;

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

    const handleMostrarVista = () => {
        if (vistaCalculos == false) {
            dispatch("vistaPulsado", mesSeleccionado);
        }
        vistaCalculos = !vistaCalculos;
    };
</script>

<button on:click={handleMostrarVista}
    >Ver Listado de Sesiones Mes {mesSeleccionado}</button
>
<div class="listadoSesionesPorMes">
    {#if vistaCalculos && arrayParaLaVista.length > 0}
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
                        <tr>
                            <td>{indice}</td>
                            <td class="dia"
                                >{`${formatear(
                                    item.diaSesion.slice(8, 10),
                                    2,
                                    false
                                )}`}</td
                            >
                            <td class="nombre"
                                >{`${item.apellido}, ${item.nombre}`}</td
                            >
                            <td class="plan">{item.plan.slice(0, 4)}</td>
                            <td>{item.valorPago}</td>
                            <td>{item.valorSesion}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <p class="centrar">Total: ${totalPagos}</p>

        <button on:click={() => (vistaCalculos = !vistaCalculos)}>Cerrar</button
        >
    {/if}
</div>

<style>
    .listadoSesionesPorMes {
        font-family: "Courier New", Courier, monospace;
        font-size: x-small;
        text-align: left;
    }

    .centrar {
        text-align: center;
    }
    #tabla {
        overflow-x: auto;
        text-align: right;
    }

    .nombre{
        text-align: left;
    }

    .dia, .plan{
        text-align: center;
    }

    tbody{
        overflow: auto;
    }
    table,
    th,
    td {
        border: 1px solid;
        border-collapse: collapse;
    }
    th{
        text-align: center;
    }

    th,
    td {
        padding: 5px;
    }

    tr:hover {
        background-color: rgb(206, 181, 173);
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>
