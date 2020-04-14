<script>
  import { spring, tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  let zoomIn;
  let zoomOut;
  // const width = tweened(100, {
  //   duration: 300,
  //   easing: cubicOut
  // });

  const width = spring(100, {
    stiffness: 0.01,
    damping: 0.1
  });

  zoomIn = setInterval(() => {
    width.set(150);
  }, 300);
  zoomOut = setInterval(() => {
    width.set(100);
  }, 600);
</script>

<img
  src="https://static.wixstatic.com/media/2f0290_fa6488a045e24dbba76cf5b4948da9c2~mv2.jpg"
  alt="image"
  width={$width} />
