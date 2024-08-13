<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import grainedOptions from '$lib/utils';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import chapters from '$lib/chapters.js';

	let selectedChapter = 0;

	let header;
	onMount(() => {
		grained('#header', grainedOptions);
		headerHeight.set(header.clientHeight);
	});
</script>

<svelte:head>
	<title>Chapters | Artify4Kids</title>
	<meta property="og:title" content="About Us | Artify4Kids" />
	<script src="/grained.js"></script>
</svelte:head>

<svelte:window
	bind:scrollY={$scrollDistance}
	on:resize={() => {
		headerHeight.set(header.clientHeight);
	}}
/>

<main>
	<section
		id="header"
		class="flex h-[400px] flex-col items-center justify-center bg-a-green"
		bind:this={header}
	>
		<h1 class="mb-4 text-6xl font-bold text-white drop-shadow-md md:text-8xl">Chapters</h1>
		<p
			class="mx-10 max-w-[550px] text-center text-sm font-light italic text-white drop-shadow-md md:text-base"
		>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat doloremque reprehenderit
			natus expedita nihil nesciunt eaque cum repudiandae aliquam eligendi.
		</p>
	</section>
	<section class="flex h-lvh bg-a-green-bg p-28">
		<Leaflet view={[39.41369, -99.993224]} zoom={4} />
		<!-- {#if selectedChapter === 0}
			<h1 class="text-5xl font-bold">Bay Area, CA</h1>
		{/if} -->
	</section>
</main>

<style>
	* {
		position: relative;
	}
</style>
