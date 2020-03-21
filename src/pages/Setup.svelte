<script>
  import Layout from "../components/Layout.svelte";
  import firebase from "@firebase/app";
  import "../firebase.js"
  import "@firebase/auth";
  export let language = "en";

  let step = 1;
  let user = "";
  
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/calendar"); //Calendar Permissions

  const signin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(firebase.auth().currentUser);
        user = firebase.auth().currentUser;
      });
  };

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("signed out successfully");
        user = "";
      })
      .catch(function(error) {
        console.error(error);
      });
  };
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
  label.lang {
    color: #1545a5;
    font-weight: 600;
    font-size: 11pt;
    margin: 0 4px;
  }
  label.lang.active {
    color: #fff;
  }
  #lang_english,
  #lang_japanese {
    display: none;
  }
  section.language-select {
    display: flex;
    align-items: center;
    left: 48px;
    top: 48px;
    position: absolute;
  }
  section.oauth-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  section.oauth-buttons button {
    display: flex;
    align-items: center;
    margin: 16px 0;
  }
  section.oauth-buttons button img {
    width: 16px;
    filter: grayscale(1) brightness(100);
    margin: 0 8px;
  }
</style>

<!-- 
  Tried doing it the vanilla-ish way without any success.  This bit below loads up the google api in the header of the page Svelte outputs... Oddly, for some reason, I can't attach any script onload event watchers to the script, or even use anything from the google api!
  
  Seems to load up just fine when putting the link in the url bar. Hmm. Maybe it needs a ?=apikeysomething in the url to work.

  Tried following this guide after my first attempt failed: https://medium.com/google-cloud/using-google-apis-with-firebase-auth-and-firebase-ui-on-the-web-46e6189cf571

  It didn't work! Kept getting errors about gapi being undefined. Gapi is an object from the api.js. Weird that it's not accessiable by any javascripts in this page.

  Should test by making a quick vanilla HTML/JS/CSS page, to see if the fault is within my approach with that, or Svelte is just doing something weird. 
  -->

<!-- 
  
  <svelte:head>
  <script async defer src="https://apis.google.com/js/api.js">
  </script>
</svelte:head> 

-->
<main class="page-wrapper">
  <aside>
    {#if step == 1}
      <section class={step == 1 ? 'step-one sidebar' : 'sidebar'}>
        <h1>Welcome to Jikanri. Let's start by setting things up.</h1>
        <p>Time to get some work done! Let's start with some configuration.</p>
      </section>
    {/if}
  </aside>
  <section class="language-select">
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
  </section>
  {#if step > 1}
    <section class="paginator">
      <button class="btn-secondary-borderless" on:click={() => step--}>
        Previous
      </button>

      <button class="btn-primary" on:click={() => step++}>Next</button>
    </section>
  {/if}
  <section class="oauth-buttons">
    {#if !user}
      <button class="btn-primary" on:click={signin}>
        <img src="/google.svg" alt="" />
        Sign in using Google
      </button>
    {/if}
    {#if user.displayName}
      Signed in as
      <h1>{user.displayName}</h1>
      <button on:click={signout}>sign out</button>
    {/if}
  </section>
</main>
