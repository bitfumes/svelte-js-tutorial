<script>
  export let data;

  function status() {
    if (data.hungerStatus == "Hungry") {
      return "I am very hungry, give me food 🍲";
    }
    return "No thanks ✋, you take the food 🍞";
  }
</script>

<p>{data.hungerStatus}</p>
<p>{$$props.name} is saying {status()}</p>
