<script>
    export let planes;
    export let planSeleccionado;
    import { createEventDispatcher } from "svelte";
    let activaSelectPlan = true;
    const dispatch = createEventDispatcher();
    function cambioPlan() {
        dispatch("cambioPlan", { valor: { planSeleccionado } });
    }
</script>

<div class="select-plan-container">
    <input type="checkbox" bind:checked={activaSelectPlan} />
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
</div>

<style>
    .select-plan-container {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: start;
        grid-gap: 2px;
        width: 100%;
        margin: auto;        
    }

    input {
        grid-column: span 1;
    }
    select {
        grid-column: span 7;
    }
</style>
