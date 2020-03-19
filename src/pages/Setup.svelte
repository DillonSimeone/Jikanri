<script>
  import Layout from "../components/Layout.svelte";
  let step = 1;
  export let language = "en";
</script>

<style>
  main.page-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  aside section.step-one {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 25vw;
    justify-content: center;
    min-width: 360px;
    background: #256eff;
    padding: 48px;
    height: 100vh;
  }
  aside section.step-one h1 {
    color: #fff;
    font-size: 28pt;
    font-weight: 800;
  }
  aside section.step-one p {
    color: #fff;
    font-size: 10pt;
    font-weight: 300;
    font-style: italic;
    margin: 24px 0;
  }
  section.paginator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    height: 160px;
    flex-grow: 1;
    padding: 0 96px;
    align-self: flex-end;
  }
  button.help{
    font-style: italic;
  }
  label.lang {
    color: #ccc;
    font-weight: 600;
    font-size: 11pt;
    margin: 0 4px;
  }
  label.lang.active {
    color: #256eff;
  }
  #lang_english,
  #lang_japanese {
    display: none;
  }
  section.language-and-help {
    display: flex;
    align-items: center;
    left: calc(25% + 96px);
    top: 48px;
    width: calc(75% - 2*96px);
    justify-content: space-between;
    position: absolute;
  }
</style>

<main class="page-wrapper">
  <aside>
    {#if step == 1}
      <img src="svg/logo.svg" alt="" class="logo step-one" />
      <section class="step-one">
        <h1>Welcome to Jikanri. Let's start by setting things up.</h1>
        <p>Time to get some work done! Let's start with some configuration.</p>
      </section>
    {/if}
  </aside>
  <section class="language-and-help">
    <span>
      <label
        for="lang_english"
        class={language == 'en' ? 'lang active' : 'lang'}
        on:click={() => (language = 'en')}>
        EN
      </label>
      <input type="radio" name="language" id="lang_english" />
      <label
        for="lang_japanese"
        class={language == 'jp' ? 'lang active' : 'lang'}
        on:click={() => (language = 'jp')}>
        JP
      </label>
      <input type="radio" name="language" id="lang_japanese" />
    </span>
    <button class="btn-secondary-borderless help">Do you need help?</button>
  </section>
  <section class="paginator">
    {#if step > 1}
      <button class="btn-secondary-borderless" on:click={() => step--}>
        Previous
      </button>
    {:else}
      <span />
    {/if}
    <button class="btn-primary" on:click={() => step++}>Next</button>
  </section>
</main>
