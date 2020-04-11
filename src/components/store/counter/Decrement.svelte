<script>
  import { count } from "../store.js";
  function decre() {
    count.update(n => n - 1);
  }
</script>

<button on:click={decre}>-</button>
