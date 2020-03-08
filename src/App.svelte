<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Setup from './pages/Setup.svelte'
  export let url = 'kdkdk'
</script>

<Router {url}>
  <div>
    <Route path="/">
      <Setup />
    </Route>
  </div>
</Router>
