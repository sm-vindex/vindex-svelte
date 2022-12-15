<script>
  import NavBar from "./lib/NavBar.svelte";
  import About from "./pages/About.svelte";
  import Archive from "./pages/Archive.svelte";
  import Contact from "./pages/Contact.svelte";
  import Current from "./pages/Current.svelte";
  import Staff from "./pages/Staff.svelte";

  export var selectedTab = "current";
</script>

<main>
  <NavBar bind:selectedTab={selectedTab} />
  {#if selectedTab == "current"}
    <Current />
  {:else if selectedTab === "archive"}
    <Archive />
  {:else if selectedTab === "about"}
    <About />
  {:else if selectedTab === "staff"}
    <Staff />
  {:else if selectedTab === "contact"}
    <Contact />
  {/if}
</main>
