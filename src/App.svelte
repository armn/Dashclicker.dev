<script>
  import Browser from "./Browser.svelte";
  import Editor from "./Editor.svelte";
  import InlineInput from "svelte-inline-input";

  import { name } from "./store";

  function onInputBlur(value, target) {
    value.detail ? target.set(value.detail) : target.set("Dashclicker");
  }
</script>

<main>
  <h1>
    Hi, <InlineInput
      bind:$name
      placeholder={$name}
      on:blur={(e) => onInputBlur(e, name)}
      inputClasses="input--h1"
    />! 👋
  </h1>
  <p>
    You are an aspiring <mark>web developer</mark>.
  </p>
  <button type="button">Got it!</button>
</main>

<section><Editor /></section>
<section><Browser /></section>

<style lang="scss">
  main,
  section {
    padding: 1rem;
  }
</style>
