<script>
  import ThisSimple from "./ThisSimple.svelte";
  let mycomp;
  function updateFromOutSide() {
    mycomp.update();
  }
</script>

<ThisSimple bind:this={mycomp} />

<button on:click={updateFromOutSide}>Outside Button</button>
