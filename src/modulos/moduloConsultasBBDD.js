import { db } from "../configFirebase/firebasePacientes";
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
import { devuelveFechaActual } from "./moduloSesiones";

const sesionesRef = collection(db, "sesiones");
const pacientesRef = collection(db, "Pacientes");
const planesRef = collection(db, "Planes");

/*
consulta de sesiones por mes.
Se le pasa el mes a consultar.
Si no se le pasa nada debería calcular en base al mes actual
*/
export const querySnapshotConsultaMesActual = async (mesSeleccionado) => {
  const MesActual = devuelveFechaActual(mesSeleccionado);
  const inicioMesActual = MesActual.fechaInicio;
  const finMesActual = MesActual.fechaFin;  
  const querySnapshot = await getDocs(
    query(
      sesionesRef,
      where("diaSesion", ">=", inicioMesActual),
      where("diaSesion", "<=", finMesActual)
    )
  );
  return querySnapshot.docs.map((sesionMesActual) => sesionMesActual.data());
};

// estoy haciendo la consulta de Pacientes que se ejecuta en el boton del componente ListadoSesionesPorMes
//Hasta ahora da un objeto que hay que convertir a datos
export let querySnapshotPacientes = async () => {
  try {
    const querySnapshot = await getDocs(pacientesRef)
    console.log(querySnapshot);  
  } catch (error) {
    console.error(error);    
  }    
};

