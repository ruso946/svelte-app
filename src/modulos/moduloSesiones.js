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

export let funcSumaValorPagoPorPaciente = (pacienteID, sesiones, mesSeleccionado) => {
  // obtiene la suma de los pagos de los valores por el paciente seleccionado
  // que está en el store.js, y filtrando tambien por mes actual
  //console.log("sesiones[0][diaSesion].slice(5,7)",sesiones[0][diaSesion].slice(5, 7), "mesActual",mesActual.toString().padStart(2, "0"));
  const sesionesFiltradas = sesiones.filter(
    (sesion) =>
      sesion.pacienteID === pacienteID &&
      sesion.diaSesion.slice(5, 7) ===
        mesSeleccionado.toString().padStart(2, "0")
  );
  const totalValorSesionPorPaciente = sesionesFiltradas.reduce((sum, pago) => sum + pago.valorSesion, 0);
  const totalValorPagoPorPaciente = sesionesFiltradas.reduce((sum, pago) => sum + pago.valorPago, 0);
  return [totalValorSesionPorPaciente, totalValorPagoPorPaciente];
};
