<script>
  import { count } from "../store.js";
  function incre() {
    count.update(n => n + 1);
  }
</script>

<button on:click={incre}>+</button>
