<script>
    import { onDestroy, onMount } from "svelte";
    import { db } from "./firebasePacientes";
    import {
        collection,
        onSnapshot,
        updateDoc,
        doc,
        query,
        where,
    } from "firebase/firestore";
  import { pacienteSeleccionado } from "./store";
    //import { pacienteSeleccionado } from "./store";

    //export let sesiones;

    let diaHoy = new Date().toLocaleDateString();
    let pacienteID;
    let diaSesion;
    let fechaPago;
    let valorPago;
    let valorSesion;

    let pacienteSeleccionadoID;
    let pacienteSeleccionadoNombre;
    let pacienteSeleccionadoApellido;
    let pacienteSeleccionadoPlan;

    let apellidoBind = "apellidoBind";
    let nombreBind = "nombreBind";

    const unsubscribe = onSnapshot(
        collection(db, "sesiones"),
        (querySnapshot) => {
            var sesiones = [];
            querySnapshot.forEach((doc) => {
                sesiones.push(doc.data());
            });

            console.log("sesiones", sesiones);

            diaSesion = sesiones[0]["diaSesion"];
            fechaPago = sesiones[0]["fechaPago"];
            valorPago = sesiones[0]["valorPago"];
            valorSesion = sesiones[0]["valorSesion"];
        }
    );

    onDestroy(unsubscribe);

//    $: console.log("desde fuera", sesiones, sesiones[0]["pacienteID"]); //descomentar para verificar la suscripcion a la escucha de dB sesiones
</script>

<div class="contenedorFormularioSesiones">
    <h5>CRUD Sesiones</h5>
    <label
        ><input
            bind:value={apellidoBind}
            placeholder="apellido paciente"
        />Apellido paciente</label
    >
    <label
        ><input bind:value={nombreBind} placeholder="nombre paciente" />Nombre
        paciente</label
    >
    <label
        ><input bind:value={diaHoy} placeholder="diaSesion" /> diaSesion</label
    >
    <label
        ><input bind:value={fechaPago} placeholder="fechaPago" /> fechaPago</label
    >
    <label
        ><input bind:value={valorPago} placeholder="valorPago" /> valorPago</label
    >

    <label
        ><input bind:value={valorSesion} placeholder="valorSesion" /> valorSesion</label
    >

    <div class="buttons mt-3 p-2 d-flex justify-content-center">
        <button on:click={() => console.log("create sesiones")} disabled={false}
            >create</button
        >
        <button on:click={() => console.log("update sesiones")} disabled={false}
            >update</button
        >
        <button on:click={() => console.log("delete sesiones")} disabled={false}
            >delete</button
        >
    </div>
</div>

<style>
    .contenedorFormularioSesiones {
        display: block;
        border: 2px solid black;
        padding: 0.5em;
        margin-top: 0.5em;
    }
    .contenedorFormularioSesiones label {
        display: block;
    }
</style>
