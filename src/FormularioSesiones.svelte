<script>
    import CrudPacientes from "./CRUDPacientes.svelte";
        
    export let pacientes = [];
        
</script>

<main>    
    <div class="contenedorCrud">
        <CrudPacientes {pacientes} />
    </div>
    
</main>

<style>
.contenedorCrud{
    align-items: start;
}
</style>
