<script>
  import Destroy from "./components/LifeCycle/Destroy.svelte";
  let show = false;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  :global(h1) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  {#if show}
    <Destroy />
  {/if}
  <button on:click={() => (show = !show)}>Show</button>
</main>
