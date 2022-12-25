<script>
	export let name;
	export let title;
	export let bio;
	export let imagePath;
</script>

<div class="Person">
	<img src={imagePath} alt=""/>
	<div class="description">
		<h3>{name}</h3>
		<h4>{title}</h4>
		<p>{bio}</p>
	</div>
</div>

<style>
	.Person {
		display: flex;
		width: 720px;
		text-align: left;
	}
	p {
		white-space: pre-wrap;
	}
	h4 {
		opacity: 60%;
	}
	img {
		width: 15vw;
		object-fit: cover;
		margin-right: 32px;
	}
</style>