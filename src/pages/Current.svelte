<script>
	// imports
  import Cover from '../lib/Cover.svelte';
  import EditorNotes from '../lib/EditorNotes.svelte';
  import Gallery from '../lib/Gallery.svelte';

	let scroll;

	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
</script>

<svelte:window bind:scrollY={scroll}/>

<div id="Current">
	<h2>Time | Fall 2022 Issue</h2>
	{#if !isMobile}
		<Gallery {scroll}/>
	{/if}
	<EditorNotes {isMobile} />
	<Cover {isMobile}/>
</div>

<style>
	#Current {
		width: 100%;
		text-align: left;
	}

	h2 {
		text-align: center;
		font-family: 'EB Garamond';
		font-size: 30px;
		letter-spacing: 0.02em;
		margin: 0;
	}

</style>