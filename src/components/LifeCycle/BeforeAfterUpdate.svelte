<script>
  import { onMount, beforeUpdate, afterUpdate } from "svelte";
  let attempts = 0;
  let bombs = new Array(50);
  let randNum = 0;
  let interval;
  // beforeUpdate(() => {
  //   console.log("I am from before update");
  // });

  onMount(() => {
    interval = setInterval(() => {
      randNum = Math.floor(Math.random() * bombs.length);
    }, 1000);
  });

  afterUpdate(() => {
    if (attempts == 10) {
      clearInterval(interval);
      alert("You loose!");
    }
  });

  function handleClick(index) {
    if (index == randNum) {
      bombs = [...bombs.slice(0, index), ...bombs.slice(index + 1)];
    } else {
      attempts = attempts + 1;
    }
  }
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .bomb {
    cursor: pointer;
  }
</style>

<h2>Slip Click Game</h2>
Attempts {attempts}
<div class="container">
  {#each bombs as _, i}
    <div
      class="bomb"
      style={i == randNum ? '' : 'opacity:0.3'}
      on:click={() => handleClick(i)}>
      💣
    </div>
  {/each}
</div>
