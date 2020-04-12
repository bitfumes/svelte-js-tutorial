<script>
  import Gallary from "./Gallary.svelte";
  let fruits = [
    "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
    "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf"
  ];
</script>

<div style="display:flex;justify-content:center">
    <Gallary let:clicked={IAmClicked}>
      <img style={IAmClicked ? 'border:4px solid yellow':''} src={fruits[0]} alt="fruits" width="100" height="100" />
    </Gallary>
    <Gallary let:clicked={IAmClicked}>
      <img style={IAmClicked ? 'opacity:0.5':''} src={fruits[1]} alt="fruits" width="100" height="100" />
    </Gallary>
    <Gallary let:clicked={IAmClicked}>
      <img style={IAmClicked ? 'opacity:0.1':''} src={fruits[2]} alt="fruits" width="100" height="100" />
    </Gallary>
</div>
