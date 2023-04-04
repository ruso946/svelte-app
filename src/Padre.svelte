<script>
    import CrudPacientes from "./CRUDPacientes.svelte";
    import CRUDSesiones from "./CRUDSesiones.svelte";
    //import FormularioSesiones from "./FormularioSesiones.svelte";
    import { onDestroy } from "svelte";
    import { db } from "./firebasePacientes";
    import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
    import SubscripcionPacientes from "./SubscripcionPacientes.svelte";

    
    
    let sesiones = [];
    let pacientes=[];

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


    <div class="row">
        <div class="contenedor-pacientes col-12 col-md-5">
            <h5>CRUD Pacientes</h5>
            <CrudPacientes {pacientes}/>
            
        </div>

        <div class="col-12 col-md-6 contenedor-sesiones">
            <CRUDSesiones {sesiones}/>
        </div>
    </div>


<style>
    .contenedor-sesiones {
        text-align: left;
        box-sizing: border-box;
        padding: 0.5em;
        border: 0.2em solid black;
        background-color: cadetblue;
        display: inline-block;
        margin: 0.2em;
    }

    .contenedor-pacientes {
        align-items: start;
        border: 0.2em solid black;
        padding: 0.5em;
        background-color: cornflowerblue;
        margin: 0.2em;
    }
</style>
