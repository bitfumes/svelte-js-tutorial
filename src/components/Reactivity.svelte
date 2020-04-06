<script>
  let total = 0;
  $: shipping = total * 0.001;
  $: grandTotal = total + shipping;

  $: if (total > 500) {
    shipping = 0;
  }

  function addToCart() {
    total = total + 40;
  }
</script>

<div>
  <img
    src="https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg"
    width="100"
    alt="apple" />
  <button on:click={addToCart}>Add to Cart</button>
</div>
<div>
  <img
    src="https://www.irishtimes.com/polopoly_fs/1.3923226.1560339148!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"
    width="100"
    alt="orange" />
  <button on:click={addToCart}>Add to Cart</button>
</div>

<p>Total {total}</p>

<p>Shipping {shipping}</p>
<p>Grand Total {grandTotal}</p>
