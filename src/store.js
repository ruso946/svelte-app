import { writable } from 'svelte/store';

export const editStatus = writable(false); //maneja la visibilidad del boton>dice Update

export const nuevoPacienteStatus = writable (true); //maneja la visibilidad del boton>dice AgregaPaciente
                                                    //                                antes de presionarlo nuevoPacienteStatus=true y los campos están desactivados
                                                    //tras presionarlo> habilita los inputs reseteados
                                                    //y pasa la leyenda del boton a Save y pone $grabaNuevoPaciente=True
                                                    //si el boton dice Save, entonces llama a la funcion addDoc con los datos de los input
                                                    //

