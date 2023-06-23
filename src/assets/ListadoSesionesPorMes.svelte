<script>
    import { onMount } from "svelte";
    export let mesSeleccionado
    export let vistaCalculos;
    export let arrayParaLaVista;
    export let totalPagos;

    function formatear(valor, cantidadCaracteres, inicio) { //inicio = true pone los caracteres de relleno al inicio, inicio=false, pone los caracteres al final
        let cadena = String(valor); // Convertir el valor a cadena

        if (cadena.length > cantidadCaracteres) {
            cadena = cadena.slice(0, cantidadCaracteres); // Cortar la cadena a los primeros 10 caracteres
        } else if (cadena.length < cantidadCaracteres && inicio) {
            cadena = cadena.padStart(cantidadCaracteres, " "); // Agregar espacios a la izquierda hasta completar 10 caracteres
        } else if (cadena.length < cantidadCaracteres && inicio) {
            cadena = cadena.padEnd(cantidadCaracteres, " ")} // Agregar espacios a la derecha hasta completar 10 caracteres       

        return cadena;
    }
</script>

<div class="listadoSesionesPorMes">
    {#if vistaCalculos}
        <h1>Listado sesiones por mes {mesSeleccionado}</h1>
        <ul>
            {#each arrayParaLaVista as item, indice}
                <li>
                    {`${formatear(indice + 1, 3, true)})${formatear(item.diaSesion.slice(8, 10), 2, true)} -${formatear(item.apellido, 6, false)},${formatear(item.nombre, 5, false)} -${formatear(item.plan, 4, true)} - pago: $ ${formatear(item.valorPago, 5, false)} - valor sesion: $${formatear(item.valorSesion, 5, false)} `}
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
