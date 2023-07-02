<script>
  import Padre from "./Padre.svelte";
  let password = import.meta.env.VITE_PASSWORD;
  let user = "nada";
  let cntrsn;

  const chequear = () => {
    if (cntrsn === password) {
      user = "Gonzalo";
    }
  };
</script>

<main>
  {#if user === "nada"}
    <div class="ingreso">
      <h1>ingrese la contraseña:</h1>
      <input type="password" bind:value={cntrsn} on:input={chequear} />
    </div>
  {:else if user === "Gonzalo"}
    <div class="contenedorPadre">
      <Padre />
    </div>
  {/if}
</main>

<style>
  * {
    margin: 0;
  }

  main {
    margin: auto;
  }

  .contenedorPadre {
    display: flex;
    flex-direction: column;
    max-width: 100vh;
    margin: auto;
  }

  .ingreso {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid, 1px;
    border-color: #3E5947;
    height: 100vh;
    background-color: #404040;
    color: #8C8C8C;
  }

  h1{
    color: #EFF3F5;
  }
  /* body.dark-theme {
  --main-color       : #404040;
  --title-color      : #EFF3F5;
  --text-color       : #8C8C8C;
  --light-text-color : #A0A7AC;
  --border-color     : #3E5947;
  --container-color  : #368F51;
  --body-color       : #192229;
}   */
</style>
