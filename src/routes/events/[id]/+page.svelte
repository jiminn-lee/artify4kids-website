<script>
	import { scrollDistance, headerHeight } from '$lib/stores';
	import { onMount } from 'svelte';
	import events from '$lib/events.js';
	import Page from '../+page.svelte';
	import { page } from '$app/stores';

	onMount(() => {
		headerHeight.set(0);
		scrollDistance.set(2);
	});
</script>

<main class="flex h-fit flex-col justify-center gap-20 bg-a-purple-bg pt-20">
	<h1 class="mt-10 text-center text-6xl font-bold">{events[$page.params.id].name}</h1>
	<div class="mb-24 flex flex-wrap justify-center gap-4 px-10">
		{#each { length: events[$page.params.id].gallery } as image, i}
			<img
				loading="lazy"
				src="/events/{events[$page.params.id].id}/{events[$page.params.id].id}-{i + 1}.jpeg"
				alt=""
				class="aspect-square w-[300px] object-cover"
			/>
		{/each}
	</div>
</main>
