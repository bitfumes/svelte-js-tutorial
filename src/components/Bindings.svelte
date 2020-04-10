<script>
  let width = 100;
  let imageUrl;
  let locked = false;
</script>

<input type="text" bind:value={width} />
<input type="range" disabled={locked} bind:value={width} min="100" max="1024" />
<input type="checkbox" bind:checked={locked} />
<div>
  <label>
    <input
      type="radio"
      bind:group={imageUrl}
      disabled={locked}
      value="https://i.ytimg.com/vi/vzyN-ruhgPM/maxresdefault.jpg" />
    Mr. Bean
  </label>
  <label>
    <input
      type="radio"
      bind:group={imageUrl}
      disabled={locked}
      value="https://imagevars.gulfnews.com/2020/03/31/Speak-like-Doremon--a-cartoon-character--women-told_1713038d0c1_medium.jpg" />
    Doremon
  </label>

</div>

<div>
  <select bind:value={imageUrl} disabled={locked}>
    <option value="https://i.ytimg.com/vi/vzyN-ruhgPM/maxresdefault.jpg">
      Mr. Bean
    </option>
    <option
      value="https://imagevars.gulfnews.com/2020/03/31/Speak-like-Doremon--a-cartoon-character--women-told_1713038d0c1_medium.jpg">
      Doremon
    </option>
  </select>
</div>

<img src={imageUrl} {width} />
