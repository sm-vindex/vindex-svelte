<script>
    import { getChaptersData, getWorksData } from "../data/data";
    import Chapter from "../lib/Chapter.svelte";
    import Work from "../lib/Work.svelte";

		var currentChapterIndex = 0;
		var currentWorkIndex = 0;

		const data = getWorksData();
		const poetryproseData = data[0];
		const artData = data[1];
		const worksData = poetryproseData.concat(artData);

		const chaptersData = getChaptersData();
		var chapterData = chaptersData[currentChapterIndex];
		var chapterWorkIndexes = chapterData.works;
		var currentWork;

		const handleClickPrev = () => {
			if (currentWorkIndex === 0) {
				currentChapterIndex--;
				chapterData = chaptersData[currentChapterIndex];
				chapterWorkIndexes = chapterData.works;
				currentWorkIndex = chapterData.works.length - 1;
			} else {
				currentWorkIndex--;
			}
			currentWork = worksData[chapterWorkIndexes[currentWorkIndex - 1]];
		}

		const handleClickNext = () => {
			if (currentWorkIndex === chapterData.works.length) {
				currentChapterIndex++;
				chapterData = chaptersData[currentChapterIndex];
				chapterWorkIndexes = chapterData.works;
				currentWorkIndex = 0;
			} else {
				currentWorkIndex++;
			}
			currentWork = worksData[chapterWorkIndexes[currentWorkIndex - 1]];
		}
		// TODO add image transition
		// TODO make breadcrumbs component
		// TODO fix routing
</script>

<div id="Issue">
	<div id="buttons">
		{#if !(currentChapterIndex === 0 && currentWorkIndex === 0)}
		<button on:click={() => handleClickPrev()}>Previous work</button>
		{:else}
			<p></p>
		{/if}
		{#if !(currentChapterIndex === chaptersData.length - 1 && currentWorkIndex === chaptersData[chaptersData.length - 1].works.length)}
			<button on:click={() => handleClickNext()}>Next work</button>
		{:else}
			<p></p>
		{/if}
	</div>
	{#if currentWorkIndex == 0}
		<Chapter chapter={chapterData} {currentChapterIndex} {worksData}/>
	{:else}
		<Work work={currentWork}/>
	{/if}
</div>

<style>
	#Issue {
		padding-left: 32px;
		padding-right: 32px;
	}
	#buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 8px;
	}
	button {
		font-family: 'Roboto Mono';
		font-weight: bold;
		font-size: 12px;
		background-color: whitesmoke;
		border-style: solid;
		border-color: gray;
		border-radius: 1px;
		color: gray;
		padding: 8px 16px 8px 16px;
		transition: ease-in-out 0.1s;
	}
	button:hover {
		background-color: gray;
		color: white;
		transition: ease-in-out 0.1s;
		cursor: pointer;
	}
</style>