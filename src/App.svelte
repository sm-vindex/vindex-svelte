<script>
  import { Router, Route } from "svelte-routing";
  import NavBar from "./lib/NavBar.svelte";
  import About from "./pages/About.svelte";
  import Current from "./pages/Current.svelte";
    import Issue from "./pages/Issue.svelte";
  import Staff from "./pages/Staff.svelte";
</script>

<main>
  <Router>
  <NavBar />
  <div id="Routes">
    <Route path="winter-2022-issue" component={Issue} />
    <Route path="staff" component={Staff}/>
    <Route path="about" component={About} />
    <Route path="/" component={Current}></Route>
  </div>
  </Router>
</main>
