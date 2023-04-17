<script>
  import CRUDPacientes from "./CRUDPacientes.svelte";
  import CRUDSesiones from "./CRUDSesiones.svelte";
  import { onDestroy } from "svelte";
  import { db } from "./firebasePacientes";
  import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

  let sesiones = [];
  let pacientes = [];

  const unsubSesiones = onSnapshot(
    collection(db, "sesiones"),
    (querySnapshot) => {
      sesiones = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log("desde Padre.svelte>unsubSesiones:", sesiones);
      // agregarClavesFaltantes(sesiones, arrayDeNombresDeClaves);
      // console.log("Desde Padre.svelte>unsub", sesiones);
      // sesiones.forEach((sesiones) => {
      //     actualizaSesiones(sesiones);
      // });
    },
    (err) => {
      console.log(err);
    }
  );

  onDestroy(unsubSesiones); // quita la suscripcion a la escucha al cambiar de pagina o destruir el componente
</script>

<body>
  <div class="contenedor-pacientes">
    <h5>CRUD Pacientes</h5>
    <CRUDPacientes {pacientes} />
  </div>

  <div class="contenedor-sesiones">
    <CRUDSesiones {sesiones} />
  </div>
</body>

<style>

  body{
    max-width: 100vh;
    margin: auto;
  }

  .contenedor-pacientes, .contenedor-sesiones {
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
