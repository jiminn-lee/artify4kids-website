<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';

	onMount(() => {
		let options = {
			animate: false,
			patternWidth: 100,
			patternHeight: 100,
			grainOpacity: 0.05,
			grainDensity: 1,
			grainWidth: 1,
			grainHeight: 1
		};
		grained('#header', options);

		headerHeight.set(header.clientHeight);
	});

	let header;
</script>

<svelte:head>
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section id="header" class="h-[50vh] flex justify-center items-center" bind:this={header}>
		<h1 class="text-white text-8xl font-bold mb-8">Upcoming</h1>
	</section>
</main>

<style>
	#header {
		background-color: hsla(38, 0%, 100%, 1);
		background-image: radial-gradient(at 15% 19%, hsla(354, 96%, 73%, 1) 0px, transparent 50%),
			radial-gradient(at 53% 17%, hsla(251, 54%, 60%, 1) 0px, transparent 50%),
			radial-gradient(at 88% 21%, hsla(213, 87%, 67%, 1) 0px, transparent 50%),
			radial-gradient(at 86% 80%, hsla(107, 64%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 16% 83%, hsla(52, 89%, 81%, 1) 0px, transparent 50%);
	}
</style>
