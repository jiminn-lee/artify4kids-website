<script>
	import { scrollDistance, headerHeight } from '$lib/stores';
	import { onMount } from 'svelte';
	import events from '$lib/events.js';
	import { page } from '$app/stores';

	onMount(() => {
		headerHeight.set(0);
		scrollDistance.set(2);
	});

	let { data } = $props();
	$inspect(data);
	let imageLoad = $state(new Array(events[$page.params.id].gallery).fill(false));
</script>

<main class="bg-a-purple-bg flex h-fit flex-col justify-center gap-20 pt-20">
	<h1 class="mt-10 text-center text-6xl font-bold">{events[$page.params.id].name}</h1>
	<div class="mb-24 flex flex-wrap justify-center gap-4 px-10">
		<!-- {#each { length: events[$page.params.id].gallery } as image, i}
			{#if !imageLoad[i]}
				<div class="aspecct-square w-[300px] bg-purple-300"></div>
			{/if}
			<img
				loading={i > 6 ? 'lazy' : 'eager'}
				src="/events/{events[$page.params.id].id}/{events[$page.params.id].id}-{i + 1}.webp"
				alt=""
				class="aspect-square w-[300px] object-cover transition-opacity"
			   	onload={() => {
					imageLoad[i] = true;
				}}
				style={imageLoad[i] ? 'opacity:1; position: block' : 'opacity:0; position: absolute'}
			/>
		{/each} -->
	</div>
</main>
