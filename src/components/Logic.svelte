<script>
  let loggedIn = true;
  let replies = [
    {
      time: "3 min ago",
      message: "Svelte does't have virtual dom"
    },
    {
      time: "5 min ago",
      message: "I think vuejs is very famous"
    },
    {
      time: "10 min ago",
      message: "Why do you think svelte is good?"
    }
  ];

  function addNew() {
    replies = [
      {
        time: "1 min ago",
        message: "Hi Iam the newest reply"
      },
      ...replies
    ];
  }

  function remove(index) {
    replies = replies.filter((r, i) => i != index);
  }
</script>

<h2>Talk about Svelte</h2>

{#each replies as reply, index}
  <div>
    <h3>{reply.time}</h3>
    <p>{reply.message}</p>
    <button on:click={() => remove(index)}>Remove</button>
  </div>
{/each}
{#if loggedIn}
  <button on:click={addNew}>Add New</button>
{:else}
  <button>Login Now</button>
{/if}
