<script>
/*
Lo que hay que traer:
 - array sesiones ==> como prop que viene desde padre (export let)
 - $idPacienteSeleccionado ==> import desde el store
 - mesSeleccionado ==> como prop (export let)
 - funcion handle_onChange_select_sesiones ==> se usa en el on:change ///Hay que generar un evento que burbujee a CRUDSesiones para que dispare esa funcion
 - selectedSessionId ==> se usa en el bind:group 
*/
import { createEventDispatcher } from "svelte";
import {idPacienteSeleccionado} from "../store";
export let mesSeleccionado;
export let sesiones;
const dispatch = createEventDispatcher();
let selectedSessionId;

const handle_onChange_select_sesiones = (e)=>{
    console.log(selectedSessionId, e.target.value)
    dispatch("cambioSelectorSesion", e.target.value)
}


</script>

<ul class="sinPunto">
    {#each sesiones as sesion}
      {#if Object.values(sesion).includes($idPacienteSeleccionado) && parseInt(sesion.diaSesion.slice(5, 7)) == mesSeleccionado}
        <li>
          <input
            type="radio"
            id={sesion.id}
            on:change={handle_onChange_select_sesiones}
            bind:group={selectedSessionId}
            name="sesiones"
            value={sesion.id}
          />
          <label for={sesion.id}
            >{`${sesion.diaSesion.slice(8, 10)} -sesion: $${
              sesion.valorSesion
            }-pago: ${sesion.fechaPago.slice(5, 10)} $${
              sesion.valorPago
            }`}</label
          >
        </li>
      {/if}
    {/each}
  </ul>

  <style>
#select-sesiones {
    max-width: 100%;
    min-width: 100%;
    font-size: x-small;
  }  
.sinPunto {
    list-style: none;
  }
  </style>