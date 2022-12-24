<script>
// @ts-nocheck
  import { onMount } from "svelte";

	const setupButterflyAnimation = () => {
		var butterfly = document.getElementById("butterfly-path");
		var length = butterfly.getTotalLength();

		butterfly.style.strokeDasharray = length;
		butterfly.style.strokeDashoffset = length;

		window.addEventListener("scroll", handleScrollButterfly);

		function handleScrollButterfly() {
			// FIXME inaccurate scroll percent
			var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.clientHeight);
			var draw = length * scrollpercent;
			// Reverse the drawing (when scrolling upwards)
			butterfly.style.strokeDashoffset = `${length - draw}px`;
		}	
	}

	const setupScrollCloud = () => {
		var cloud = document.getElementById("cloud-path");
		var length = cloud.getTotalLength();

		cloud.style.strokeDasharray = length;
		cloud.style.strokeDashoffset = length;

		window.addEventListener("scroll", handleScrollCloud);

		function handleScrollCloud() {
			// FIXME inaccurate scroll percent
			var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.clientHeight);
			var draw = length * scrollpercent;
			// Reverse the drawing (when scrolling upwards)
			cloud.style.strokeDashoffset = `${length - draw}px`;
		}	
	}

	onMount(() => {
		setupButterflyAnimation();
		setupScrollCloud();
	})
	
</script>

<section id="EditorNotes">
	
	<section id="Quote">
	<div class="content">
		<h2>Editor's Note</h2>
		<!-- Butterfly SVG -->
		<svg id="butterfly" width="262" height="248" viewBox="0 0 262 248" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path id="butterfly-path" d="M1 156.276C13.6351 161.641 36.9103 177.427 46.3534 193.124C52.6925 203.662 67.24 220.122 85.5887 231.5M85.5887 231.5C100.137 240.522 115.702 247 126.819 247C151.956 247 179.887 226.913 243.195 174.9C297.774 130.058 204.093 115.171 179.089 119.427C154.084 123.684 104.475 165.721 104.475 185.01C104.475 204.298 132.272 197.78 138.656 178.624C145.04 159.468 162.596 88.8313 143.577 67.1479C124.558 45.4646 109.396 48.7903 91.1748 40.1435C72.9536 31.4968 56.7275 -1.62686 44.6244 1.1667C32.5213 3.96026 26.4032 101.336 44.6244 148.161C59.2013 185.622 78.0077 219.329 85.5887 231.5ZM85.5887 231.5C76.855 224.561 56.4349 211.03 44.6244 212.413C32.8139 213.797 20.2852 222.656 15.4971 226.913" stroke="black" stroke-width="2"/>
		</svg>		

		<p class="quote">
The butterfly counts
not months but moments,
and has time enough.

Time is a wealth of change,
but the clock in its parody
makes it mere change and no wealth.

Let your life lightly dance
on the edges of Time
like dew on the tip of a leaf.

<em>Rabindranath Tagore</em>
		</p>
	</div>
</section>
	
<section id="Notes">
	<p>
		Egg, Caterpillar, Pupa, Adult – four stages mark a butterfly’s life of several months. They fly from one flower to another, soaking in the beauty of nature every second and putting a smile on every human’s face that comes its way. But ponder upon this, please: What we live in 80 years, a butterfly lives in a year. Who lives a better life? Flowers blossom and wither. Clouds form and dissipate. They all live such evanescent lives. But do we, blessed to live up to a century and given the most prized assets of mind and intelligence, appreciate all that we possess? Are we still willing to take time to “do nothing” but purely immerse ourselves in this beautiful world? Do we still slow down in our busy lives to take a walk, feel the breeze, and reflect upon “subtlety”?
		
In this issue, several St. Markers are going to take you on a journey of discovery, contemplation, and sharing what they’ve perceived as they press that pause button in transient time.
	
<em>Taylor Zhou, Editor-In-Chief</em>
</p>

<div id="cloud-container">
	<svg id="cloud" width="1721" height="356" viewBox="0 0 1721 356" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path id="cloud-path" d="M1 353.5C113.667 357.333 338.2 342.6 335 253C331 141 230.5 209 249.5 241.5C268.5 274 308.5 321.5 373 312C424.6 304.4 466.5 269.5 481 253M481 253C530.167 284 662.7 344.1 799.5 336.5C929.469 329.279 1076.77 343.144 1165 286.769M481 253C462.167 234.5 427.3 189.5 438.5 157.5C452.5 117.5 504 87 552 77.5C590.4 69.9 647 96.6666 670.5 111C706 70 795.1 -9.10004 867.5 2.49996C939.9 14.1 954.333 98.5 953 140.5M481 253C602 243.167 865 204.9 953 140.5M953 140.5C951.5 136.667 957.1 127.4 987.5 111C1017.9 94.5999 1024.17 131.833 1023.5 152.5C1110.83 123.333 1274.1 93.9 1228.5 209.5C1214.82 244.173 1192.85 268.971 1165 286.769M1165 286.769C1298.33 312.346 1596 351 1720 301" stroke="black" stroke-width="2"/>
	</svg>
</div>
</section>
</section>

<style>
	#EditorNotes {
		background-color: whitesmoke;
	}
	
	#Quote {
		height: calc(100vh - var(--nav-height));
		width: 100%;
		background-color: whitesmoke;
		text-align: center;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	#Notes {
		height: calc(100vh - var(--nav-height));;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-size: cover;
		color: black;
		background-color: whitesmoke;
		white-space: pre-wrap;
	}

	#butterfly {
		width: 200px;
	}

	#cloud-container {
		position: relative;
		width: 100%;
		padding-bottom: 0px;
		background-color: whitesmoke;
		display: flex;
		justify-content: center;
	}

	#cloud {
		width: 800px;
	}

	p {
		max-width: 800px;
		padding-left: 32px;
		padding-right: 32px;
	}

	em {
		opacity: 60%;
	}

	.quote {
		quotes: none;
		font-size: 16px;
		white-space: pre-wrap;
	}

	.content {
		z-index: 1;
	}
</style>