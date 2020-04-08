<script>
  export let cartData;
</script>

{#if cartData.length == 0}
  <h2>Cart is empty</h2>
{:else}
  <h2>In Your Cart</h2>
  {#each cartData as item}
    <p>{item.name}</p>
  {/each}
{/if}
