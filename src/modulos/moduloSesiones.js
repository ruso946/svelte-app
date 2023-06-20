import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../configFirebase/firebasePacientes";
import {
  pacienteSeleccionado,
  apellidoSeleccionado,
  idPacienteSeleccionado,
  nombreSeleccionado,
} from "../store";

/*
Este modulo limpia el codigo de CRUDSesiones al traer acá
algunas funciones que son importadas en el CRUD
*/

export let devuelveFechaActual = (mesSeleccionado) => {
  let fechaActual = new Date();
  let mesActual; 
  const dia = fechaActual.getDate().toString().padStart(2, "0");;
  const hora = fechaActual.getHours().toString().padStart(2, "0");;
  const minutos = fechaActual.getMinutes().toString().padStart(2, "0");;  
  if (mesSeleccionado<1 || mesSeleccionado>12) {
    mesActual = mesSeleccionado;
  } else {
    mesActual = fechaActual.getMonth() + 1;
  }  
  let mesActualFormateado = mesActual.toString().padStart(2, "0");
  let anioActual = fechaActual.getFullYear();  
  let anioActualFormateado = anioActual.toString();
  const fechaString = `${anioActualFormateado}_${mesActualFormateado}_${dia}_${hora}${minutos}`;
  console.log(`fechaString ${fechaString}`);

  // Crea las fechas de inicio y fin del mes actual o seleccionado
  let fechaInicioMes = `${anioActualFormateado}-${mesActualFormateado}-01`;
  let fechaFinMes = `${anioActualFormateado}-${mesActualFormateado}-31`;

  return fechaString;
};
