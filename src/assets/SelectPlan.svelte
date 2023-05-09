<script>
    export let planes;
    export let planSeleccionado;
    import {createEventDispatcher} from "svelte";
    let activaSelectPlan = true;
    const dispatch = createEventDispatcher();
    function cambioPlan () {
        dispatch("cambioPlan",{valor: {planSeleccionado}})
    }
</script>

<input type="checkbox" bind:checked={activaSelectPlan}>
      {#if activaSelectPlan}
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
    {/if}


<style>
    select{
        width: 80%;
        max-width: 100%;
        text-align: end;
    }
</style>
