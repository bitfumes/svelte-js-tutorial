<style>
  div {
    padding: 1rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    background-color: green;
    border-radius: 0.3rem;
    color: white;
    width: 300px;
  }
  section {
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 0.7rem;
  }
</style>

<section>
  <div>
    <slot>Give your message here</slot>
    <p>
      <slot name="message" />
    </p>
  </div>
</section>
