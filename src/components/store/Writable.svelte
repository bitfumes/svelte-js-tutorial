<script>
  import Increment from "./counter/Increment.svelte";
  import Decrement from "./counter/Decrement.svelte";
  import Reset from "./counter/Reset.svelte";
  import { count } from "./store.js";
</script>

The count is {$count}
<br />
<Increment />
<Decrement />
<Reset />
