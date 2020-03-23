<script>
  import Layout from '../components/Layout.svelte'
  import firebase from '@firebase/app'
  import '../firebase.js'
  import '@firebase/auth'
  import { Link } from 'svelte-routing'
  import { providerDeciperer } from './../components/providerDeciperer.svelte'
  export const language = 'en'

  const step = 1
  let user = ''
  let provider = '' // Use this to see which account is signed in.

  const googleProvider = new firebase.auth.GoogleAuthProvider() // Maybe move this into the signin function? Pass 'google', 'github', etc string to the function to decide which provider to load up. 
  googleProvider.addScope("https://www.googleapis.com/auth/calendar") // Calendar Permissions

  const githubProvider = new firebase.auth.GithubAuthProvider() // See line 13 comment.
  githubProvider.addScope("repo")

  firebase.auth().onAuthStateChanged(function(u) {
    if (u) {
      user = u
      provider = u.providerData[0].providerId
      // console.log(u) // Debugging
      // console.log("Mmm.... I think this account is a " + provider + " account!")  // Debugging
    } else {
      user = ''
    }
  }) 

  const signin = provider => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // console.log(result.user) // firebase.auth().onAuthStateChanged(function(u) {... Gets the same stuff.
        // console.log(result)
        providerDeciperer(result)
      }) 
  } 

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // console.log("signed out successfully")
      })
      .catch(function(error) {
        console.error(error)
      }) 
  } 
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
        on:click={() => language = 'en'}>
        EN
      </label>
      <input type="radio" name="language" id="lang_english" />
      <label
        for="lang_japanese"
        class={language == 'jp' ? 'lang active' : 'lang'}
        on:click={() => language = 'jp'}>
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
      <button
        class="btn-primary"
        on:click={() => {
          signin(googleProvider)
        }}>
        <img src="/google.svg" alt="" />
        Sign in using Google
      </button>
      <button
        class="btn-primary"
        on:click={() => {
          signin(githubProvider)
        }}>
        <img src="" alt="" />
        Sign in using Github
      </button>
    {/if}
    {#if user}
      Signed in as
      <h1>{user.displayName}</h1>
      <button on:click={signout}>sign out</button>
      {#if provider === 'google.com'}
        <Link to="/testGapi">Google API Test</Link>
      {/if}
      {#if provider === 'github.com'}
        <Link to="/testGithubApi">Github API Test</Link>
      {/if}
    {/if}
  </section>
</main>
