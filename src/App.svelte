<script>  
  import Padre from "./Padre.svelte";
</script>

<main>
  <div class="contenedorPadre">
    <Padre />
  </div>
</main>

<style>
  * {
    margin: 0;
  }

  main{
    margin: auto;
  }

  .contenedorPadre {
    display: flex;
    flex-direction:  column;  
    max-width: 100vh;
    margin: auto;
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
