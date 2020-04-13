<script>
  import { getContext } from "svelte";
  let fruits = getContext("fruits");
</script>

<style>
  .image {
    width: 80px;
    height: 80px;
    margin: 0.1rem;
    border-radius: 0.3rem;
  }
</style>

{#each fruits as fruit}
  <img src={fruit} alt="image" class="image" />
{/each}
