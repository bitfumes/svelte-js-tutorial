<script>
  function handleForm() {}
</script>

<form action="/something" on:submit|preventDefault={handleForm}>
  <input placeholder="Fill Me" on:mouseover={e => e.target.focus()} />
</form>
