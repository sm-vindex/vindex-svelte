<script>
	export var selectedTab = "current";
</script>

<nav>
	<a href="/" id="vindex-logo" on:click|preventDefault={() => (selectedTab = "current")}>VINDEX</a>
	<a href="/" on:click|preventDefault={() => (selectedTab = "archive")}>Archive</a>
	<a href="/" on:click|preventDefault={() => (selectedTab = "about")}>About</a>
	<a href="/" on:click|preventDefault={() => (selectedTab = "staff")}>Staff</a>
	<a href="/" on:click|preventDefault={() => (selectedTab = "contact")}>Contact</a>
</nav>

<style>
	nav {
    position: -webkit-sticky;
		position: sticky;
    top: 0;
		/* for testing */
    /* background-color: wheat;  */
    display: flex;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 48px;
    padding-right: 48px;
    align-items: center;
  }
  a {
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