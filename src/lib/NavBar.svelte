<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  
  let height;

  onMount(() => {
    var r = document.documentElement;
		r.style.setProperty("--nav-height", `${height}px`);
    console.log(height);
    console.log(r.style.getPropertyValue("--nav-height"));
	});
</script>

<nav bind:clientHeight={height}>
  <Link classname="link" to="/" style="font-family:'EB Garamond'; font-size: 18px; font-weight: bold;">VINDEX</Link>
	<a href="https://www.stmarksschool.org/vindex/archive" rel="external">Archive</a>
	<Link classname="link" to="/about">About</Link>
  <Link classname="link" to="/staff">Staff</Link>
  <Link classname="link" to="/submit">Submit</Link>
</nav>

<style>
	nav {
    position: sticky;
    top: 0;
    background-color: whitesmoke; 
    display: flex;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 48px;
    padding-right: 48px;
    align-items: center;
    width: 100%;
    z-index: 3;
  }
  :global(a) {
    padding-left: 16px;
    padding-right: 16px;
    color: black;
    font-family: 'Roboto Mono';
    font-size: 12px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    height: 100%;
    text-decoration: none;
  }
  #vindex-logo {
    font-family: "EB Garamond";
    font-weight: 600;
    padding-right: 32px;
    font-size: 20px;
  }
</style>