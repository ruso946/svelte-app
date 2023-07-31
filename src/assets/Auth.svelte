<script>
  import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { createEventDispatcher } from "svelte";
  import { authenticatedUser } from "../store";
  import { auth } from "../configFirebase/firebasePacientes";

  const createUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const dispatch = createEventDispatcher();

  let email = "";
  let password = "";

  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      $authenticatedUser = userCredential.user; // Actualizamos el estado de autenticación con el usuario autenticado
      console.log(userCredential);
	  console.log("authenticatedUser: ",$authenticatedUser.UserCredentialImpl);
      dispatch("loginSuccess", userCredential.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
	  document.getElementById("mensaje-error").innerText = error.message;
    }
  }

  function logout() {
    $authenticatedUser = null; // Actualizamos el estado de autenticación para cerrar sesión
    signOut(auth)
      .then(() => {
        // El usuario ha cerrado sesión exitosamente.
        console.log("Se ha cerrado sesión correctamente.");
      })
      .catch((error) => {
        // Ha ocurrido un error al cerrar sesión.
        console.error("Error al cerrar sesión:", error.message);
      });
    console.log(authenticatedUser);
  }

  let mensajeError = "";
</script>

<main>
  {#if $authenticatedUser} 	
    <button on:click={logout}>cerrar sesion</button>
	<p style="font-size: x-small">bienvenido {auth.currentUser.email}</p>    
  {:else}
    <h1>Iniciar sesión</h1>
    <form on:submit|preventDefault={login}>
      <label>
        Correo electrónico:
        <input type="email" bind:value={email} required />
      </label>
      <label>
        Contraseña:
        <input type="password" bind:value={password} required />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>

	<div id="mensaje-error">{mensajeError}</div>
  {/if}
</main>
