<script>
  export let planes;
  export let planSeleccionado;
  import { createEventDispatcher } from "svelte";
  let planSelectVisible=true;  
  let planSelectInvisible = !planSelectVisible;  
  
  $: {    
    planSelectInvisible = !planSelectVisible;
    manejaVisibilidadSelectPlan();
  }

  const manejaVisibilidadSelectPlan = () => {
    const checkBoxP = document.getElementById("CheckBoxParticular")
    console.log(checkBoxP);
    planSelectInvisible = !planSelectInvisible;
  };

  const modificaLabelPlan = () => {
    dispatch("clickCheckPlan", { valor: { planSelectVisible } });
  };

  const clickCheckPlan = (event) => {
                                                          //en esta funcion se verifica que al clickear en el checkbox de OS/particular
    const elementoDelEventoClick = event.target;          // se haga o no visible el selector de planes
    manejaVisibilidadSelectPlan();  // y tambien se llama a la funcion que dispara el evento que modifica el label
                                                          // del select plan
    if (planSelectInvisible) {
      planSeleccionado = "particular";
      console.log(planSelectInvisible, "planSelectInvisible", planSeleccionado)
      //disparar un evento que actualice el campo en la bd
      // const checkboxInput = document.getElementById("activaPlanSelector");
    } else {
      console.log("selectVisible= true, que hago?", planSelectVisible)
    }
    modificaLabelPlan();
  };
  const dispatch = createEventDispatcher();
  const cambioPlan = () => {
    dispatch("cambioPlan", { valor: { planSeleccionado } });
  };
</script>

<div id="selectPlanContainer">
  <input
    bind:checked={planSelectVisible}
    on:click={clickCheckPlan}
    type="checkbox"
    name="CheckBoxParticular"
    id="CheckBoxParticular"
  />
  <select
    class:planSelectVisible
    class:planSelectInvisible
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

  .planSelectVisible {
    visibility: visible;
  }

  .planSelectInvisible {
    visibility: hidden;
  }
</style>
