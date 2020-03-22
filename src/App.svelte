<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Setup from './pages/Setup.svelte'
  import GapiTest from './pages/GapiTest.svelte'
  import GithubTest from './pages/GithubTest.svelte'
  export let url = ''
</script>

<Router {url}>
  <div>
    <Route path="/">
      <Setup />
    </Route>
    <Route path="/testGapi">
      <GapiTest />
    </Route>
    <Route path="/testGithubApi">
      <GithubTest />
    </Route>
  </div>
</Router>
