<script>
  let items = [
    {
      image:
        "https://img.oola.com/filter:scale/quill/3/4/5/7/a/c/3457acbac6c4c0922c81e3e26df0f6e832ed2754.jpg",
      name: "Ferrero Rocher"
    },
    {
      image:
        "https://img.oola.com/filter:scale/quill/f/f/b/8/9/b/ffb89b6324f8bae2dd7d87e59b1598bdf1f8b281.jpg",
      name: "Hershey's"
    }
  ];

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick(item) {
    dispatch("itemAddedToCart", item);
  }
</script>

<div on:click>
  <h2>Buy your favorite Chocolate</h2>
  {#each items as item}
    <div style="display: flex; justify-content:center">
      <img src={item.image} width="70" alt="image" />
      <p>{item.name}</p>
      <button on:click={() => handleClick(item)}>Add To Cart</button>
    </div>
  {/each}
</div>
