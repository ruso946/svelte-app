<script>
  import CRUDPacientes from "./CRUDPacientes.svelte";
  import CRUDSesiones from "./CRUDSesiones.svelte";
    
  let sesiones = [];

</script>

<body>
  <div class="contenedor-pacientes">
    <h5>CRUD Pacientes</h5>
    <CRUDPacientes />
  </div>

  <div class="contenedor-sesiones">
    <CRUDSesiones {sesiones} />
  </div>
</body>

<style>
  body {
    max-width: 100vh;
    margin: auto;
  }

  .contenedor-pacientes,
  .contenedor-sesiones {
    display: flex;
    max-width: 100vh;
    flex-direction: column;
    border: 0.2em solid black;
    padding: 3px;
    background-color: cadetblue;
    margin-bottom: 3px;
    text-align: center;
  }
</style>
