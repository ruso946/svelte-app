<script>
  export let planes;
  export let planSeleccionado;
  import { createEventDispatcher } from "svelte";
  let planVisible = true;  

  const activaSelect = () => {
    let select = document.getElementById("plan");
    if (!planVisible) {
      select.style.visibility = "visible";
    } else {
      select.style.visibility = "hidden";
    }
  };

  const dispatch = createEventDispatcher();
  const cambioPlan = () => {
    dispatch("cambioPlan", { valor: { planSeleccionado } });
  };  
</script>

<div id="selectPlanContainer">
  <input
    bind:checked={planVisible}
    on:click={activaSelect}
    type="checkbox"
    name="activaPlanSelector"
    id="activaPlanSelector"
  />
  <select
    name="plan"
    id="plan"
    bind:value={planSeleccionado}
    on:change={cambioPlan}
  >
    {#each planes as plan}
      <option value={plan}>{plan}</option>
    {/each}
  </select>
</div>

<style>
  #selectPlanContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    flex-grow: 1;
  }

  select {
    width: 100%;
    max-width: 100%;
    text-align: end;
  }
</style>
