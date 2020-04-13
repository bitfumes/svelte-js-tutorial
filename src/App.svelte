<script>
  import Gallary from "./components/Context/Gallary.svelte";
  import { setContext } from "svelte";
  let fruits = [
    "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
    "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf"
  ];

  setContext("fruits", fruits);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  :global(h1) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Gallary />
</main>
