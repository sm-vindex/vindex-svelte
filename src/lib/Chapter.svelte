<script>
	export let chapter;
	export let worksData;
	export let currentChapterIndex;
	const imagePath = `/src/assets/chapterArt/${chapter.title}.jpeg`;
	const getChapterWorks = () => {
		const works = [];
		for (var i = 0; i < chapter.works.length; i++) {
			const workIndex = chapter.works[i];
			const work = worksData[workIndex];
			works.push(work);
		}
		return works;
	}
	const chapterWorks = getChapterWorks();
</script>

<div class="Chapter">
	<img src={imagePath} alt=""/>
	<h3>chapter {currentChapterIndex + 1} · {chapter.title}</h3>
	<h4>{chapter.quote}</h4>
	<em>{chapter.author}</em>
	<hr class="solid">
	<!-- TODO make these links later -->
	{#each chapterWorks as work}
		<p><b>{work.title}</b> · {work.author}</p>
	{/each}
</div>

<style>
	.Chapter {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
	}
	h3 {
		font-family: 'Roboto Mono';
		margin-top: 12px;
		margin-bottom: 0px;
	}
	h4 {
		margin-bottom: 12px;
	}
	img {
		height: 300px;
		width: 300px;
		margin-bottom: 16px;
		object-fit: cover;
	}
	hr.solid {
		width: 50%;
		border-top: 1px solid gray;
		opacity: 50%;
		margin: 32px;
	}
	p {
		margin-top: 4px;
		margin-bottom: 4px;
	}
</style>