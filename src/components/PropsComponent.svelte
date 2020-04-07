<script>
  import Hunger from "./Hunger.svelte";

  let data = {
    hungerStatus: "Hungry"
  };
</script>

<style>

</style>

<div>
  <Hunger {data} name="John" />
</div>
