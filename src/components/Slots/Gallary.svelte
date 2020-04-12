<script>
  export let fruit;
  let clicked;
  function handleClick() {
    clicked = !clicked;
  }
</script>

<div on:click={handleClick}>
  <slot {clicked} />
</div>
