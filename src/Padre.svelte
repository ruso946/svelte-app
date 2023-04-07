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
  body {
    flex-flow: column wrap;
    max-width: 100vh;
  }

  .contenedor-pacientes {
    max-width: 100vh;
    flex-flow: column wrap;
    align-items: start;
    border: 0.2em solid black;
    padding: 0.5em;
    background-color: cornflowerblue;
    margin: 0;
  }

  .contenedor-sesiones {
    max-width: 100vh;
    flex-flow: column wrap;
    align-items: start;    
    box-sizing: border-box;
    padding: 0.5em;
    border: 0.2em solid black;
    background-color: cadetblue;
    display: inline-block;
    margin: 0;
  }
</style>
