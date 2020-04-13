<script>
  import { tweened } from "svelte/motion";
  import { quartInOut } from "svelte/easing";
  const width = tweened(100, {
    duration: 2000,
    easing: quartInOut
  });
  function handleClick() {
    width.set(150);
  }
</script>

<button on:click={handleClick}>Animate</button>
<br />

<img
  src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578"
  width={$width} />
