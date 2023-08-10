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
      await signInWithEmailAndPassword(auth, demail, dpassword);
      await auth.currentUser.delete();
      console.log("Cuenta eliminada correctamente.");
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error.message);
    }
  }
</script>

<main>
  {#if $authenticatedUser}
    <button on:click={logout}>cerrar sesion</button>
    <p style="font-size: x-small">bienvenido {auth.currentUser.email}</p>
  {:else}
    <div class="p-3 border">
      <h5>Iniciar sesión</h5>
      <form on:submit|preventDefault={login}>
        <label class="form-label" for="liemail"> Correo electrónico: </label>
        <input
          class="form-control"
          id="liemail"
          type="email"
          bind:value={liemail}
          required
        />
        <label class="form-label" for="lipassword"> Contraseña: </label>
        <input
          class="form-control"
          id="lipassword"
          type="password"
          bind:value={lipassword}
          required
        />
        <div class="p-3 m-3">
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
      <div id="mensaje-error">{mensajeError}</div>
    </div>

    <!--<div class="p-3 border">
      <h5>Crear user</h5>
       <form on:submit|preventDefault={createUser}>
        <label class="form-label" for="cemail"> Correo electrónico: </label>
        <input
          class="form-control"
          id="cemail"
          type="email"
          bind:value={email}
          required
        />
        <label class="form-label" for="cpassword">Contraseña:</label>
        <input
          class="form-control"
          id="cpassword"
          type="password"
          bind:value={password}
          required
        />
        <div class="p-3 m-3">
          <button type="submit">crear User</button>
        </div>
      </form> 
      <div id="mensaje-error">{mensajeError}</div>
    </div>-->

    <div class="p-3 border">
      <h5>Borrar cuenta</h5>
      <form on:submit|preventDefault={deleteUser}>
        <label for="demail" class="form-label"> Correo electrónico: </label>
        <input
          class="form-control custom-input"
          id="demail"
          type="email"
          bind:value={demail}
          required
        />
        <label for="dpassword" class="form-label"> Contraseña: </label>
        <input
          class="form-control"
          type="password"
          bind:value={dpassword}
          required
        />
        <div class="p-3 m-3">
          <button type="submit">delete User</button>
        </div>
      </form>
      <div id="mensaje-error">{mensajeError}</div>
    </div>
  {/if}
</main>

<style>	

	input {
    margin: 0;
    width: 80%;
    font-size: medium;    
    color: blanchedalmond;
    background-color: rgb(58, 78, 78);
  }

  label{
	color: blanchedalmond;
  }

  main{
    color: blanchedalmond;
    background-color: rgb(58, 78, 78);
  }
  
</style>
