<script>
    import { onMount, onDestroy } from "svelte";
    import { db } from "./firebasePacientes";
    import {
        onSnapshot,
        collection,
        addDoc,
        doc,
        deleteDoc,
        updateDoc,
        getDocs,
    } from "firebase/firestore";
    import Toastify from "toastify-js";
    import Swal from "sweetalert2";
    import "sweetalert2/src/sweetalert2.scss";
    import { pacienteSeleccionado } from "./store";

    let pacientes = []; //array que viene del unsub de Padre.svelte que trae toda la db pacientes

    const unsubPacientes = onSnapshot(
        collection(db, "Pacientes"),
        (querySnapshot) => {
            pacientes = querySnapshot.docs.map((doc) => {
                console.log(doc.data());
                console.log(pacientes);
                return { ...doc.data(), id: doc.id };
            });
            //agregarClavesFaltantes(pacientes, arrayDeNombresDeClaves);
            console.log("Desde SubscripcionPacientes>unsubPacientes", pacientes);
            // pacientes.forEach((paciente) => {
            // 	actualizarPaciente(paciente);//actualizaPaciente(paciente)
            // });
        },
        (err) => {
            console.log(err);
        }
    );

    onDestroy(unsubPacientes); // quita la suscripcion a la escucha al cambiar de pagina o destruir el componente
    
</script>