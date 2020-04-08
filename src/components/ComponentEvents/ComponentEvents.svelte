<script>
  import Items from "./Items.svelte";
  import Cart from "./Cart.svelte";

  let cartData = [];
  function handleEvent(event) {
    cartData = [event.detail, ...cartData];
  }
</script>

<Items
  on:itemAddedToCart={handleEvent}
  on:click={() => alert('you are clicking')} />
<Cart {cartData} />
