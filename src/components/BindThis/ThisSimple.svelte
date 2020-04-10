<script>
  let mytag;
  let data = "";
  export function update() {
    mytag.style.color = "blue";
    mytag.innerHTML = `<h2>${data}</h2>`;
    data = "";
  }
</script>

<div bind:this={mytag}>Hello</div>
<input type="text" bind:value={data} />
<button on:click={update}>Update</button>
