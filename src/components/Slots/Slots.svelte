<script>
  import Notify from "./Notify.svelte";
</script>

<Notify>Here is the message from inside of component</Notify>
<Notify>
  Successfull
  <p slot="message">Uploading is done</p>
</Notify>
<Notify />
