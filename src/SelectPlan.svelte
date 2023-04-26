<script>
    export let planes;
    export let planSeleccionado;
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    function cambioPlan () {
        dispatch("cambioPlan",{valor: {planSeleccionado}})
    }
</script>

<main>
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
</main>

<style>
</style>
