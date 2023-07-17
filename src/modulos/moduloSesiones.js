/*
Este modulo limpia el codigo de CRUDSesiones al traer acá
algunas funciones que son importadas en el CRUD
*/

////////////////////////////////////////////////////////////////////////////
// En esta funcion se pasa un mes (nro de 1 a 12) y se devuelve un objeto //
// con las cadenas de fechaActual, fechaInicioMes, fechaFinMes.           //
// Si no se pasa un numero de mes, o se pasa un numero invalido,          //
// entonces calcula en base al mes actual.                                //
////////////////////////////////////////////////////////////////////////////

export let devuelveFechaActual = (mesSeleccionado) => {
  let fechaActual = new Date();
  let mesActual; 
  const dia = fechaActual.getDate().toString().padStart(2, "0");;
  const hora = fechaActual.getHours().toString().padStart(2, "0");;
  const minutos = fechaActual.getMinutes().toString().padStart(2, "0");;  
  if (mesSeleccionado>=1 && mesSeleccionado<=12) {
    mesActual = mesSeleccionado;
  } else {
    mesActual = fechaActual.getMonth() + 1;
  }  
  let mesActualFormateado = mesActual.toString().padStart(2, "0");
  let anioActual = fechaActual.getFullYear();  
  let anioActualFormateado = anioActual.toString();
  const fechaActualString = `${anioActualFormateado}-${mesActualFormateado}-${dia}-${hora}${minutos}`;
  
  // Crea las fechas de inicio y fin del mes actual o seleccionado
  let fechaInicioMes = `${anioActualFormateado}-${mesActualFormateado}-01`;
  let fechaFinMes = `${anioActualFormateado}-${mesActualFormateado}-31`;
  //crea el objeto que va a pasar con las cadenas creadas
  const objetoFecha = {fechaActual: fechaActualString, fechaInicio: fechaInicioMes, fechaFin: fechaFinMes}

  return objetoFecha;
};
