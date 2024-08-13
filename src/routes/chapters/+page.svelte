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
	<section class="h-lvh bg-a-green-bg p-28">
		<!-- <iframe
			loading="async"
			class=" ml-auto mr-auto h-full w-full rounded-3xl border-2 border-a-green-hover/50"
			title="Artify4Kids Chapters Map"
			src="https://www.google.com/maps/d/u/0/embed?mid=1AmQBHhZogHoz8YNjap5WQOWk153gseo&ehbc=2E312F&noprof=1"
		></iframe> -->
	</section>
</main>

<style>
	* {
		position: relative;
	}
</style>
