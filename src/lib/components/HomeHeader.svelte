<script>
	import { onMount } from 'svelte';
	import { headerHeight } from '$lib/stores';
	import grainedOptions from '$lib/utils';

	let header;

	onMount(async () => {
		await import('$lib/grained');
		grained('#header', grainedOptions);
		headerHeight.set(header.clientHeight - 200);
	});
</script>

<svelte:window on:resize={headerHeight.set(header.clientHeight - 200)} />

<section id="header" class="flex min-h-lvh flex-col" bind:this={header}>
	<div class="absolute bottom-0 w-full">
		<div class="flex w-full flex-col items-center text-white">
			<h1 class="mb-4 text-6xl font-bold drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] md:text-8xl">
				Artify4Kids
			</h1>
			<p
				class="max-w-[550px] text-center text-sm font-light italic drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] md:text-base"
			>
				<span>Artify4Kids</span> is a 501c(3) <span>non-profit</span> organization that provides
				<span>free</span>
				art programs to underserved children in the <span>Bay Area</span>. Our goal is to provide a
				safe and inclusive space for <span>young artists</span> to explore their creativity and develop
				their artistic skills.
			</p>
		</div>
		<div class="flex justify-center overflow-hidden">
			<img
				src="images/sm-1.png"
				alt=""
				class="slideInBottomSm hidden h-[40vh] object-bottom opacity-80 drop-shadow-md md:block"
				id="sm-1"
			/>
			<img
				src="images/lg-1.png"
				alt=""
				class="slideInBottom h-[45vh] opacity-85 drop-shadow-md"
				id="lg-1"
			/>
			<img
				src="images/lg-2.png"
				alt=""
				class="slideInBottom hidden h-[45vh] opacity-85 drop-shadow-md sm:block"
				id="lg-2"
			/>
			<img
				src="images/sm-2.png"
				alt=""
				class="slideInBottomSm hidden h-[40vh] object-bottom opacity-80 drop-shadow-md md:block"
				id="sm-2"
			/>
		</div>
	</div>
</section>

<style>
	#header {
		background-color: hsla(38, 0%, 100%, 1);
		background-image: radial-gradient(at 15% 19%, hsla(354, 96%, 73%, 1) 0px, transparent 50%),
			radial-gradient(at 53% 17%, hsla(251, 54%, 60%, 1) 0px, transparent 50%),
			radial-gradient(at 88% 21%, hsla(213, 87%, 67%, 1) 0px, transparent 50%),
			radial-gradient(at 86% 80%, hsla(107, 64%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 16% 83%, hsla(52, 89%, 81%, 1) 0px, transparent 50%);
	}

	.slideInBottom {
		animation-name: slideInBottom;
		animation-timing-function: ease-out;
		animation-duration: 0.5s;
		animation-fill-mode: both;
	}
	.slideInBottomSm {
		animation-name: slideInBottomSm;
		animation-timing-function: ease-out;
		animation-duration: 0.5s;
		animation-fill-mode: both;
	}

	#sm-1,
	#sm-2 {
		animation-delay: 0.1s;
	}

	@keyframes slideInBottom {
		from {
			transform: translateY(400px);
		}
		to {
			transform: translateY(0px);
		}
	}

	@keyframes slideInBottomSm {
		from {
			transform: translateY(400px);
		}
		to {
			transform: translateY(50px);
		}
	}
</style>
