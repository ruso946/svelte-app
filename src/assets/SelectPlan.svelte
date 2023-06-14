<script>
  export let optionsPlan;
  export let planSeleccionado;
  export let SelectPlanVisible;
  import { createEventDispatcher } from "svelte";
  let SelectPlanHidden;  
    
  $:SelectPlanHidden = !SelectPlanVisible;    

  const manejaVisibilidadSelectPlan = (verSelectPlan) => {
    SelectPlanVisible=verSelectPlan;    
  };

  const modificaLabelPlan = () => {    
    dispatch("clickCheckPlan", { valor:  {SelectPlanVisible}  });
    
  };

  const clickCheckPlan = (event) => {
                                                    // en esta funcion se verifica que al clickear en el checkbox de OS/particular
    var verSelectPlan = event.target.checked;       // se haga o no visible el selector de planes        
    manejaVisibilidadSelectPlan(verSelectPlan);     // y tambien se llama a la funcion que dispara el evento que modifica el label
    modificaLabelPlan();                            // del select plan       
  };
  const dispatch = createEventDispatcher();
  const cambioPlan = () => {
    dispatch("cambioPlan", { valor: { planSeleccionado } });
  };

  const clickEvento = (e) =>{
    console.log(e);
    console.log(e.srcElement.open);    
    alert("a ver si pasa algo");
    
  }
  
</script>

<!--
  si SelectPlanVisible=true entonces, se muestra el SelectPlan, o sea, estaría indicando que no es particular el paciente
  y por lo tanto, debería allí mostrar el label "plan"
  si SelectPlanVisible=false entonces, no se muestra el SelectPlan, o sea, estaría indicando que es particular el paciente
  y por lo tanto, debería allí mostrar el label "particular".
-->
<div id="selectPlanContainer">  
  <input
    bind:checked={SelectPlanVisible}
    on:change={clickCheckPlan}
    type="checkbox"
    name="CheckBoxParticular"
    id="CheckBoxParticular"
  />
  <select
    class:SelectPlanVisible
    class:SelectPlanHidden
    name="plan"
    id="plan"
    bind:value={planSeleccionado}
    on:change={cambioPlan} 
  >
    {#each optionsPlan as plan}
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

  .SelectPlanVisible {
    visibility: visible;
  }

  .SelectPlanHidden {
    visibility: hidden;
  }
</style>
