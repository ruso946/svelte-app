<script>
    import { onMount } from "svelte";
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, getDocs } from "firebase/firestore";
    import { db } from "./firebasePacientes";

    let showOptions = true;
    let optionsPlan = [];
    export let selected;

    onMount(async () => {
        // Consulta la base de datos para obtener las opciones del select
        const optionsCollection = collection(db, "planes");
        const optionsSnapshot = await getDocs(optionsCollection);
        optionsPlan = optionsSnapshot.docs.map((doc) => doc.data().plan);
    });

    export let planSeleccionado;

    const handleSelectChange = (event) => {
        planSeleccionado = event.target.value;
        selected.plan = planSeleccionado;
    };
</script>

<label
    ><input bind:value={planSeleccionado} placeholder="Plan" /><button
        class="btn btn-sm btn-success"
        on:click={() => (showOptions = true)}>cambiar plan</button
    ></label
>

{#if showOptions}
    {#each optionsPlan as optionPlan}
        <label>
            <input
                type="radio"
                bind:group={optionsPlan}                
                value={optionPlan}
            />
            {optionPlan}
        </label>
    {/each}
{/if}

<style>
</style>
