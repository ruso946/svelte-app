import { collection, query, where, getDocs, orderBy, onSnapshot } from "firebase/firestore";
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
    let mesActual = (fechaActual.getMonth())+1;
    let anioActual = fechaActual.getFullYear();
    if (mesSeleccionado){mesActual=mesSeleccionado};

    // Formatea el mes y año actual en el formato "aaaa-mm"
    let mesActualFormateado = mesActual.toString().padStart(2, "0");
    let anioActualFormateado = anioActual.toString();

    // Crea las fechas de inicio y fin del mes actual
    let fechaInicioMes = `${anioActualFormateado}-${mesActualFormateado}-01`;
    let fechaFinMes = `${anioActualFormateado}-${mesActualFormateado}-31`;

    return ({mesActualFormateado, anioActualFormateado, mesActual, anioActual, fechaInicioMes, fechaFinMes})
};

