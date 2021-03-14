<script>
	import { getNonSubsProducts } from "./data.service.js";
	let price1 = "";
	let price2 = "";
	let hasPrice;
	let vEnded;
	let vDuration;

	getNonSubsProducts().then((r) => {
		let [p1, p2] = r.productViewModels || [];
		price1 = p1.StandardPrice;
		price2 = p2.StandardPrice;
		hasPrice = price1 || price2;
	});
</script>

<div class="vid-container" class:show-prices={hasPrice && vDuration && !vEnded}>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video autoplay controls bind:duration={vDuration} bind:ended={vEnded}>
		<source src="res/price-banner.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="pbox p1">${price1}</div>
	<div class="pbox p2">${price2}</div>
</div>

<style>
	.vid-container {
		display: grid;
		position: relative;
	}

	video {
		width: 100%;
	}

	.pbox {
		position: absolute;
		font-size: 5vw;
		text-align: center;
		opacity: 0;
		pointer-events: none;
		/* background-color: rgba(0, 0, 0, 0.5); */
	}

	.show-prices .pbox {
		opacity: 1;
	}

	.p1 {
		top: 28.5%;
		left: 46.4%;
		width: 24.1vw;
	}

	.p2 {
		top: 62.5%;
		left: 48.1%;
		width: 23.2vw;
	}
</style>
