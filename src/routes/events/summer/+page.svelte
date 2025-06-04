<script>
	import { scrollDistance, headerHeight } from '$lib/stores';
	import { onMount } from 'svelte';
	import events from '$lib/events.js';
	import { page } from '$app/stores';
	import ImageItem from '$lib/components/ImageItem.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	onMount(() => {
		headerHeight.set(0);
		scrollDistance.set(2);
	});

	let { data } = $props();
</script>

<main class="bg-a-purple-bg flex h-fit flex-col justify-center pt-24">
	<a
		href="/events"
		class="hover:bg-a-black/5 ml-10 flex w-fit items-center gap-2 rounded-3xl px-2 py-1 text-xl transition"
		><ArrowLeft />Back</a
	>
	<h1 class=" my-10 text-center text-6xl font-bold">Summer Camp</h1>
	<h2 class="mb-10 ml-20 text-3xl font-semibold">Day 5</h2>
	<div class="mb-24 flex flex-wrap justify-center gap-4 px-10">
		{#each data.urls as url, i}
			<ImageItem src={url} />
			{#if i === 68}
				<h2 class="my-10 ml-20 w-full text-3xl font-semibold">Day 3</h2>
			{:else if i === 75}
				<h2 class="my-10 ml-20 w-full text-3xl font-semibold">Day 1 & 2</h2>
			{/if}
		{/each}
	</div>
</main>
