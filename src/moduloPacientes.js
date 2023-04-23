/*
Este modulo limpia el codigo de CRUDPacienes al traer acá
algunas funciones de inicializacion que son importadas en el CRUD
*/

import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebasePacientes";

export const agregarClavesFaltantes = (pacientes, arrayDeNombresDeClaves) => {  //funcion que se usa en el unsubPacientes de CRUDPacientes
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

//utilizada para agregar las claves faltantes al array pacientes, en la funcion unsubPacientes de CRUDPacientes
export const actualizaPaciente = async (selected) => {
    try {
      await updateDoc(doc(db, "Pacientes", selected.id), selected);
    } catch (error) {
      console.log(error);
    }
  };

  //Hay que hacer la prueba de poner en este modulo 
  //las suscripciones y llamar solo con una funcion de inicializacion
  //desde CRUDPacientes.
  // LO INTENTE HACER, pero es complicado porque hay que importar el array pacientes.

  //Tambien hay que ver si no conviene hacer las suscripciones desde un 
  //onMount, en vez de desde la instanciacion del componente