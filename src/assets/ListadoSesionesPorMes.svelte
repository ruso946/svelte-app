<script>
    import { createEventDispatcher } from "svelte";    
    export let mesSeleccionado;
    export let vistaCalculos;
    export let arrayParaLaVista;
    export let totalPagos;    

    const dispatch = createEventDispatcher();

    function formatear(valor, cantidadCaracteres, inicio) {        
        //inicio = true pone los caracteres de relleno al inicio, inicio=false, pone los caracteres al final        
        let cadena = String(valor);                             // Convertir el valor a cadena
        if (cadena.length > cantidadCaracteres) {
            cadena = cadena.slice(0, cantidadCaracteres);       // Cortar la cadena a los primeros 10 caracteres
        } else if (cadena.length < cantidadCaracteres && inicio) {
            cadena = cadena.padStart(cantidadCaracteres, "_");  // Agregar espacios a la izquierda hasta completar 10 caracteres
        } else if (cadena.length < cantidadCaracteres && !inicio) {
            cadena = cadena.padEnd(cantidadCaracteres, "_");    // Agregar espacios a la derecha hasta completar 10 caracteres
        } 
        return cadena;
    };

    const handleMostrarVista = () => {
        if (!vistaCalculos) {
            dispatch("vistaPulsado", mesSeleccionado);            
        }
        vistaCalculos = !vistaCalculos;
    };
</script>
<button on:click={handleMostrarVista}>Ver Listado de Sesiones Mes {mesSeleccionado}</button>
<div class="listadoSesionesPorMes">
    {#if vistaCalculos}        
        <ol>
            {#each arrayParaLaVista as item}
                <li>
                    {`${formatear(item.diaSesion.slice(8,10), 2, false)}
                    -${formatear((item.apellido+","+item.nombre), 10, false)}
                    -${formatear(item.plan, 4, true)}
                    - pago: $ ${formatear(
                        item.valorPago,
                        5,
                        true
                    )} - valor sesion: $${formatear(
                        item.valorSesion,
                        5,
                        true
                    )} `}
                </li>
            {/each}
        </ol>
        <p class="centrar">Total: ${totalPagos}</p>

        <button on:click={()=>vistaCalculos = !vistaCalculos}>Cerrar</button>
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
