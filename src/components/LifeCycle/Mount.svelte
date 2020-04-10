<script>
  import { onMount } from "svelte";
  let user;
  onMount(async () => {
    const data = await fetch("https://api.github.com/users/bitfumes");
    user = await data.json();
  });
</script>

{#if user}
  <h2>{user.name}</h2>
{:else}loading...{/if}
