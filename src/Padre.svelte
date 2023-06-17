<script>
  import CRUDPacientes from "./CRUDPacientes.svelte";
  import CRUDSesiones from "./CRUDSesiones.svelte";
  import { onMount } from "svelte";
  import { db } from "./configFirebase/firebasePacientes";
  import {
    collection,
    query,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    orderBy,
    updateDoc,
    where,
    getDocs,
  } from "firebase/firestore";
  let sesiones = [];
  let pacientes = [];
  let planes = [];
  let optionsPlan = [];
  let planSeleccionado = {};
  //este onMount hace una suscripcion a las db "Pacientes", "planes" y "sesiones"
  onMount(() => {
    const unsubscribeFunctions = [];
    const sesionesRef = collection(db, "sesiones");
    const pacientesRef = collection(db, "Pacientes");
    const planesRef = collection(db, "planes");
    const qs = query(sesionesRef, orderBy("diaSesion"));
    const qp = query(pacientesRef, orderBy("apellido"));
    const qplanes = query(planesRef, orderBy("plan"));

    //hacer una consulta de suscripcion por mes para sacar el total por mes
    //por paciente y por todas las sesiones del mes

    const unsubscribeSesiones = onSnapshot(qs, (snapshot) => {
      sesiones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    console.log("desde onMount CRUDSesiones", sesiones);
    unsubscribeFunctions.push(unsubscribeSesiones);

    const unsubscribePacientes = onSnapshot(qp, (snapshot) => {
      pacientes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    unsubscribeFunctions.push(unsubscribePacientes);

    const unsubscribePlanes = onSnapshot(qplanes, (snapshot) => {
      planes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
    unsubscribeFunctions.push(unsubscribePlanes);

    return () => {
      unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    };
  });

  $: {if (planes.length != 0) {                         // este bloque reactivo detecta cuando está cargado el array optionsPlan
    console.log(planes);                                // para agregarle el valor "particular" y ordenarlo alfabéticamente.
    optionsPlan = planes.map((plan) => plan.plan);      // Después será pasado a CRUDPacientes y a SelectPlan sucesivamente como prop
    optionsPlan.push("particular");
    optionsPlan.sort();
    console.log(optionsPlan);

  }
    else{console.log("no hay planes")}
  }


</script>

<body>
  <div class="contenedor-pacientes">
    <h5>CRUD Pacientes</h5>
    <CRUDPacientes {sesiones} {pacientes} {planes} {optionsPlan} {planSeleccionado} />
  </div>

  <div class="contenedor-sesiones">
    <CRUDSesiones {sesiones} {pacientes} {planes} {planSeleccionado} />
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
