<script>
    import FormularioSesiones from "./FormularioSesiones.svelte";
    import { onDestroy } from "svelte";
    import { db } from "./firebasePacientes";
    import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

    let arrayDeNombresDeClaves = [
        // usado para hacer que todos los campos de la base de datos y el array pacioentes tengan todas las claves
        "nombre",
        "apellido",
        "nroSocio",
        "plan",
        "createdAt",
    ];

    const agregarClavesFaltantes = (pacientes, arrayDeNombresDeClaves) => {
        //funcion que agrega los nombres de las claves faltantes en caso de que las haya, en el array pacientes.
        // Iterar por cada objeto en el array
        pacientes.forEach((paciente) => {
            // Iterar por cada nombre de clave en el array de nombres de claves
            arrayDeNombresDeClaves.forEach((nombreDeClave) => {
                // Verificar si la clave está presente en el objeto
                if (!(nombreDeClave in paciente)) {
                    // Si la clave no está presente, agregarla con un valor null
                    paciente[nombreDeClave] = null;
                }
            });
        });
    };

    const actualizaPaciente = async (selected) => {
        try {
            await updateDoc(doc(db, "Pacientes", selected.id), selected);
        } catch (error) {
            console.log(error);
        }
    };

    const unsub = onSnapshot(
        collection(db, "Pacientes"),
        (querySnapshot) => {
            pacientes = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            agregarClavesFaltantes(pacientes, arrayDeNombresDeClaves);
            console.log("Desde Padre.svelte>unsub", pacientes);
            pacientes.forEach((paciente) => {
                actualizaPaciente(paciente);
            });
        },
        (err) => {
            console.log(err);
        }
    );

    onDestroy(unsub); // quita la suscripcion a la escucha al cambiar de pagina o destruir el componente
    let pacientes = [];
</script>

<main>
    <div class="contenedor-padre">
        <FormularioSesiones {pacientes} />
    </div>
</main>

<style>
    .contenedor-padre{
        text-align: left ;
        box-sizing: border-box;
        padding: 0.5em;
        border: 1em;
        border-color: blue;
        background-color: cadetblue;
        display: inline-block;
    }
</style>
