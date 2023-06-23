<script>
    import { onMount } from "svelte";
    export let mesSeleccionado
    export let vistaCalculos;
    export let arrayParaLaVista;
    export let totalPagos;

    function convertirACadena(valor, cantidadCaracteres) {
        let cadena = String(valor); // Convertir el valor a cadena

        if (cadena.length > cantidadCaracteres) {
            cadena = cadena.slice(0, cantidadCaracteres); // Cortar la cadena a los primeros 10 caracteres
        } else if (cadena.length < cantidadCaracteres) {
            cadena = cadena.padEnd(cantidadCaracteres, "_"); // Agregar espacios a la derecha hasta completar 10 caracteres
        }        

        return cadena;
    }
</script>

<div class="listadoSesionesPorMes">
    {#if vistaCalculos}
        <h1>Listado sesiones por mes {mesSeleccionado}</h1>
        <ul>
            {#each arrayParaLaVista as item, indice}
                <li>
                    {`${convertirACadena(indice + 1, 2)})${convertirACadena(item.diaSesion.slice(8, 10), 2)} -${convertirACadena(item.apellido, 6)},${convertirACadena(item.nombre, 5)} -${convertirACadena(item.plan, 4)} - pago: $ ${convertirACadena(item.valorPago, 5)} - valor sesion: $${convertirACadena(item.valorSesion, 5)} `}
                </li>
            {/each}
        </ul>
        <p class="centrar">Total: ${totalPagos}</p>

        <button on:click={() => (vistaCalculos = false)}>ocultar</button>
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
</style>
