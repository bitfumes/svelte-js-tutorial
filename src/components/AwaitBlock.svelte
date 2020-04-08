<script>
  async function fetchUser() {
    const res = await fetch("https://api.github.com/users/bitfumes");
    if (res.ok) {
      return res.json();
    }

    throw new Error("Something Went Wrong");
  }
</script>

{#await fetchUser()}
  <p>..fetching</p>
{:then res}
  <img src={res.avatar_url} alt="user" width="100" />
  <p>{res.name}</p>
{:catch err}
  <p>{err}</p>
{/await}
