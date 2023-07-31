<script>
  import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { createEventDispatcher } from "svelte";
  import { authenticatedUser } from "../store";
  import { auth } from "../configFirebase/firebasePacientes";
  const dispatch = createEventDispatcher();
  let liemail = "";
  let lipassword = "";
  
  let email = "";
  let password = "";

  let demail = "";
  let dpassword = "";

  let mensajeError = "";
  const createUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        mensajeError = error.message;
        // ..
      });
  };

  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        liemail,
        lipassword,
      );
      $authenticatedUser = userCredential.user; // Actualizamos el estado de autenticación con el usuario autenticado
      console.log(userCredential);
      dispatch("loginSuccess", userCredential.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      mensajeError = error.message;
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

  async function deleteUser() {
  try {
	await signInWithEmailAndPassword(
        auth,
        demail,
        dpassword,
      );
    await auth.currentUser.delete();
    console.log('Cuenta eliminada correctamente.');
  } catch (error) {
    console.error('Error al eliminar la cuenta:', error.message);
  }
}
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
        <input type="email" bind:value={liemail} required />
      </label>
      <label>
        Contraseña:
        <input type="password" bind:value={lipassword} required />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>

    <div id="mensaje-error">{mensajeError}</div>

    <h1>Crear user</h1>
    <form on:submit|preventDefault={createUser}>
      <label>
        Correo electrónico:
        <input type="email" bind:value={email} required />
      </label>
      <label>
        Contraseña:
        <input type="password" bind:value={password} required />
      </label>
      <button type="submit">crear User</button>
    </form>

    <div id="mensaje-error">{mensajeError}</div>

	<h1>Borrar cuenta</h1>
    <form on:submit|preventDefault={deleteUser}>
      <label>
        Correo electrónico:
        <input type="email" bind:value={demail} required />
      </label>
      <label>
        Contraseña:
        <input type="password" bind:value={dpassword} required />
      </label>
      <button type="submit">delete User</button>
    </form>

    <div id="mensaje-error">{mensajeError}</div>
  {/if}
</main>
