<script>
	import { getWorksData } from "../data/data.js";
	import { link } from "svelte-routing";
	import { fly } from 'svelte/transition';
  import { onMount } from "svelte";

	let visible = false;

	const data = getWorksData();
	const poetryproseData = data[0];
	const artData = data[1];

	console.log(poetryproseData);
	console.log(artData);

	// TODO add transition
	// TODO change to intersection observer API
	// https://github.com/metonym/svelte-intersection-observer
	// Toggle cover photo animation when element is visible on screen

	onMount(() => {
		var observer = new IntersectionObserver(function(entries) {
			if(entries[0].isIntersecting === true) {
				visible = true;
				console.log('bluh')
			}
		}, { threshold: [1] });
		observer.observe(document.querySelector('#Cover'));
	})

</script>

<section id="Cover">
		<div id="cover-page">
			<a href="/fall-2022-issue" use:link>Enter Issue</a>
			<img src="/src/assets/art/WritInWater.jpg" transition:fly="{{ x: -200, duration: 1000 }}" alt="" />
		</div>
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
	<div></div>
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
		background-color: rgba(255, 255, 255, 0);
		padding: 10px 26px 10px 26px;
		font-size: 17px;
		transition: ease-in-out 0.1s;
		cursor: pointer;
	}
</style>