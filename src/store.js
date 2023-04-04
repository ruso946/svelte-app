import { writable , derived} from 'svelte/store';

export const editStatus = writable(false); //maneja la visibilidad del boton>dice Update

export const pacienteSeleccionado = writable({
    nombre: "nombreDefault",
    apellido: "apellidoDefault",
    id: "idDefault",
    plan: "planDefault",
    nroSocio: 9876543210,
});

export const apellidoSeleccionado = writable("");
export const nombreSeleccionado = writable("");

export const idPacienteSeleccionado = writable("");

export const psid = writable(pacienteSeleccionado["id"]);

// export const psapellido = derived(
// 	pacienteSeleccionado,
// 	$pacienteSeleccionado => $pacienteSeleccionado.apellido
// );

// export const psnombre = derived(
// 	pacienteSeleccionado,
// 	$pacienteSeleccionado => $pacienteSeleccionado.nombre
// );

export const sesionSeleccionada = writable({
    diaSesion:"",
    fechaPago:"",
    valorSesion:0,
    valorPago:0
})