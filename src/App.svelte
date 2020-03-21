<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Setup from './pages/Setup.svelte'
  import GapiTest from './pages/GapiTest.svelte'
  export let url = ''
</script>

<Router {url}>
  <div>
    <Route path="/">
      <Setup />
    </Route>
    <Route path="/test">
      <GapiTest />
    </Route>
  </div>
</Router>
