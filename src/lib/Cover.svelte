<script>
	import { getWorksData } from "../data/data.js";
	import { link } from "svelte-routing";
	import { fade, fly } from 'svelte/transition';
  import { onMount } from "svelte";

	export let isMobile;

	let visible = false;

	const data = getWorksData();
	const poetryproseData = data[0];
	const artData = data[1];

	console.log(poetryproseData);
	console.log(artData);

	var observer = new IntersectionObserver((entries) => {
			if(entries[0].isIntersecting === true) {
				visible = true;
				console.log('bluh')
			}
		}, { threshold: [0.8] });

	onMount(() => {
		if (!isMobile) {
			observer.observe(document.querySelector('#Cover'));
		} else {
			document.getElementById("cover-page").style.width = "100vw";
		}
	})
</script>

<section id="Cover">
	{#if visible}
		<div id="cover-page">
			<a href="/fall-2022-issue" use:link>Enter Issue</a>
			<img src="/assets/art/WritInWater.jpg" transition:fly="{{ x: -200, duration: 1000 }}" alt="" />
		</div>
		{#if !isMobile}
		<div id="works" transition:fly="{{ x: 200, duration: 1000 }}">
			<!-- TODO make these links actually work! -->
			<h3>Poetry / Prose</h3>
			{#each poetryproseData as work}
				<p class="work-and-author"><b>{work.title}</b> · <span class="author">{work.author}</span></p>
			{/each}
			<h3>Art</h3>
			{#each artData as work}
			<p class="work-and-author"><b>{work.title}</b> · <span class="author">{work.author}</span></p>
			{/each}
		</div>
		{/if}
	<div></div>
	{/if}
</section>

<style>
	#Cover {
		position: relative;
		display: flex;
		height: calc(100vh - var(--nav-height));
		background-color: whitesmoke;
	}
	#works {
		padding-top: 2%;
		padding-left: 4%;
	}
	.work-and-author {
		margin: 8px;
	}
	.author {
		opacity: 60%;
	}
	#cover-page {
		width: 50vw;
		height: calc(100vh - var(--nav-height));
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 50vw;
		height: calc(100vh - var(--nav-height));
		object-fit: cover;
	}
	h3 {
		font-family: 'Roboto Mono';
	}

	a {
		position: absolute;
		border-style: solid;
		border-radius: 1px;
		border-color: white;
		font-family: 'EB Garamond';
		font-size: 16px;
		background-color: rgba(255, 255, 255, 0.2);
		color: white;
		height: 22px;
		padding: 8px 24px 8px 24px;
		transition: ease-in-out 0.2s;
	}

	a:hover {
		background-color: #a96d4d;
		border-color: #a96d4d;
		transition: ease-in-out 0.1s;
		cursor: pointer;
	}
</style>