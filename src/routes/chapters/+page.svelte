<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import grainedOptions from '$lib/utils';

	let header;
	onMount(() => {
		grained('#header', grainedOptions);
		headerHeight.set(header.clientHeight);
	});
</script>

<svelte:head>
	<title>Chapters | Artify4Kids</title>
	<meta property="og:title" content="About Us | Artify4Kids" />
	<script src="src/lib/grained.js"></script>
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
		class="flex h-[40vh] flex-col items-center justify-center bg-a-green"
		bind:this={header}
	>
		<h1 class="mb-4 text-8xl font-bold text-white">Chapters</h1>
		<p class="mx-10 max-w-[550px] text-center font-light italic text-white">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat doloremque reprehenderit
			natus expedita nihil nesciunt eaque cum repudiandae aliquam eligendi.
		</p>
	</section>
</main>

<style>
	* {
		position: relative;
	}
</style>
