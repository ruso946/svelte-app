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
    max-width: 100vh;
  }
  .contenedorPadre {
    display: flex;
    flex-flow: column wrap;
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
