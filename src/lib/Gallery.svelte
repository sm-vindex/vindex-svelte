<script>
	export let scroll;
</script>

<section id="Gallery">
		<div class="container">
			<div id="column1" class="column" style:transform={`translate3d(0, ${scroll * 0.6}px, 0)`}>
				<div class="text">There is no easy ending to this story, no neat tidying up of loose ends.</div>
				<img id="Flow" src="/assets/art/Flow.jpg" alt=""/> 
			</div> 
			<div id="column2" class="column"  style:transform={`translate3d(0, ${scroll * 0.4}px, 0)`}>
				<img id="Dreamlike" src="/assets/art/Reverie.jpeg" alt=""/> 
				<div class="text">how could I ever look the past in the eye and expect to be the same?</div>
			</div> 
			<div id="column3" class="column" style:transform={`translate3d(0, ${scroll * 0.7}px, 0)`}>
				<div class="text">When my abuela was young, she had a dream</div>
				<img id="NewPort" src="/assets/art/NewPort.jpg" alt=""/> 
			</div>
		</div>
</section>

<style>
	#Gallery {
		height: 120vh;
		z-index: 2;
	}

	.container {
		display: flex;
		align-self: center;
		align-items: center;
		justify-items: center;

		width: 100%;
	}

	.column {
		padding-left: calc((100% - (280px + 354px + 491px))/4);
	}

	#column1 {
		padding-top: 80px;
		width: 280px;
		text-align: right;
	}

	#column1 > * {
		margin: 10px 0;
	}

	#column2 {
		width: 354px;
	}

	#column2 > * {
		margin: 15px 0;
	}

	#column3 {
		width: 491px;
		text-align: right;
	}

	#column3 > * {
		margin: 30px 0;
	}

	img {
		width: inherit;
	}

	.text {
		width: inherit;
		font-size: 18px;
	}
</style>