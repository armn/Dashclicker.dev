<script>
  import { editorSpeed } from "./store";

  const template = `<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Website</title>
        <link rel="icon" href="/favicon.ico">
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <h1>Hi</h1>
    </body>
</html>
`;

  let code = "";
  let i = 0;

  let disabled = false;
  function handleKeyDown(e) {
    e.preventDefault();
    e.stopPropagation();
    code += template.slice(i, i + $editorSpeed);
    i += $editorSpeed;
    if (i >= template.length) {
      disabled = true;
    }
  }
</script>

<p>
  Here is your code editor. Type inside the <mark>textarea</mark> to create your
  first website.
</p>
<div class="editor">
  <div class="header">
    <div class="buttons">
      <div class="button" />
      <div class="button" />
      <div class="button" />
    </div>
    <div class="speed">{$editorSpeed} ch/key</div>
  </div>

  <div class="editor-content">
    <mark>/* Write code below */</mark>
    <textarea
      on:keydown={(e) => e.preventDefault()}
      on:keyup={(e) => handleKeyDown(e)}
      value={code}
      {disabled}
    />
  </div>
  <div class="editor-footer">
    {code.length}/{template.length}
  </div>
</div>

{#if code.length == template.length}
  <p>
    Well done! You'll be doing this a lot until Artificial Intelligence comes
    into play.
  </p>
  <button type="button">Got it!</button>
{/if}

<style lang="scss">
  .editor {
    width: 500px;
    background: rgb(55, 65, 75);
    font-family: monospace;
    font-size: 15px;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    color: white;
  }

  textarea {
    background: transparent;
    width: 100%;
    height: 200px;
    padding: 1rem;
    resize: none;
    color: white;
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .header .speed {
    margin-left: auto;
    padding: 1rem;
  }

  .editor .buttons {
    box-sizing: border-box;
    border-bottom: 1px solid rgb(45, 55, 65);
    padding: 10px;
  }

  .editor .button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    display: inline-block;
  }

  .editor .button:nth-child(1) {
    background: rgb(250, 50, 50);
  }

  .editor .button:nth-child(2) {
    background: rgb(250, 250, 50);
  }

  .editor .button:nth-child(3) {
    background: rgb(50, 250, 50);
  }

  .editor .editor-content {
    padding: 15px;
  }

  .editor-footer {
    padding: 15px;
    text-align: right;
  }
</style>
