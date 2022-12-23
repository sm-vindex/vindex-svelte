<script>
	export let work;
</script>

<div class="Work">
	<div class="titles">
		<h2>{work.title}</h2>
		<h3>{work.author}</h3>
	</div>
	<div class="content">
		{#if work.content[0] === "/"}
			<img src={work.content} alt="" />
		{:else}
			<p>{work.content}</p>
		{/if}
	</div>
</div>

<style>
	.Work {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
	}
	p {
		white-space: pre-wrap;
	}
	.titles {
		text-align: center;
	}
	h3 {
		opacity: 60%;
	}
	p {
		padding-bottom: 24px;
		padding-left: 256px;
		padding-right: 256px;
	}
	img {
		padding-top: 24px;
		max-height: 100vh;
	}
</style>