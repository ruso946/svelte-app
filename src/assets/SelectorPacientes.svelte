<script>
  import { createEventDispatcher } from "svelte";
  export let pacientesFiltrada;
  export let planSelect;// estado que tambien va a pasarse en el evento cambioSelectPaciente
  let i=0;                // indice que se entrega con el evento cambioSelectPaciente
  let pacienteId;       // id del paciente seleccionado que se entrega con el evento cambioSelectPaciente
  const dispatch = createEventDispatcher();

  const handleSelect = (event) => {
    const indiceSelectPaciente = event.target.value;    
    planSelect = pacientesFiltrada[indiceSelectPaciente].plan;
    pacienteId = pacientesFiltrada[indiceSelectPaciente].id;
    dispatch("cambioSelectPaciente", [indiceSelectPaciente, planSelect,pacienteId]);
    
    console.log(
      `dispatch cambioSelectPaciente, idPaciente ${pacienteId} valorindiceSelectPaciente: 
      ${indiceSelectPaciente}, planSelect ${planSelect.plan ? planSelect.plan : "particular"}`
    );
    /*con este evento cambioSelectPaciente que se dispara al cambiar de eleccion de paciente
     en el select de pacientes se entrega el valor de ese select, y tambien el id de paciente
     y el plan correspondiente
    */
  };
</script>
{#if  (pacientesFiltrada.length > 0)}  
<select
  name="select-pacientes"
  class="select-Pacientes"
  id="elementoSelectPacientes"
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
            : " -" + person.nroSocio + " - plan " + person.plan.plan
        } `}</option
      >
       <!-- {console.log(person.plan)} -->
    {/each}
  {/if}
</select>
{/if}


<style>
  select {
    max-width: 100%;
    width: 100%;
    margin: 0;
    font-size: small;
  }
</style>
