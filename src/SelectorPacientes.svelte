<script>
  import { createEventDispatcher, onMount } from "svelte";
  export let pacientesFiltrada;
  export let planSelect;

  let i;                //el indice de la opcion seleccionada en el Select de este componente
  
  const dispatch = createEventDispatcher();
  
  const handleSelect = (event) => {    
    const indiceSelectPaciente = event.target.value;
    planSelect = pacientesFiltrada[indiceSelectPaciente].plan;    
    dispatch("cambioSelectPaciente", indiceSelectPaciente);
    console.log(
      "dispatch cambioSelectPaciente, valorindiceSelectPaciente: ",
      indiceSelectPaciente
    );
    /*con este evento cambioSelectPaciente que se dispara al cambiar de eleccion de paciente
     en el select de pacientes se entrega el valor de ese select.
     En este momento es "i", pero podría pasarse el objeto correspondiente al paciente seleccionado
     junto a "i" en un array.
     De este modo, se puede mantener el funcionamiento en base a "i" de la logica del componente
     y al mismo tiempo, simplificar el estado del componente y prescindir del uso del store
    */
  }; 

</script>

<select
  name="select-pacientes"
  class="select-Pacientes"
  id="selectPacientes"
  on:change={handleSelect}  
  bind:value={i}
  size={5}
  >{#if pacientesFiltrada.length == 0}
    <option disabled>no hay resultados para ese prefijo...</option>
  {:else}
    {#each pacientesFiltrada as person, j}
      <!-- este bucle each itera por la lista filtrada con el indice i
				que es el que le da el valor seleccionado al select -->
      <option value={j}
        >{`${person.apellido}, ${person.nombre}${
          person.plan == "particular"
            ? ""
            : " -" + person.nroSocio + " - plan " + person.plan
        } `}</option
      >
    {/each}
  {/if}
</select>

<style>
  select {
    max-width: 100%;
    width: 100%;
    margin: 0;
    font-size: small;
  }
</style>
