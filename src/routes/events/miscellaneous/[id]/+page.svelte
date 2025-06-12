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
	$inspect(data);
</script>

<main class="bg-a-purple-bg flex h-fit flex-col justify-center gap-20 pt-24">
	<a
		href="/events/miscellaneous"
		class="hover:bg-a-black/5 ml-10 flex w-fit items-center gap-2 rounded-3xl px-2 py-1 text-xl transition"
		><ArrowLeft />Back</a
	>
	<h1 class=" text-center text-6xl font-bold">
		{events[5].events.find((e) => e.id === $page.params.id).name}
	</h1>
	<div class="mb-24 flex flex-wrap justify-center gap-4 px-10">
		{#each data.urls as url}
			<ImageItem src={url} />
		{/each}
	</div>
</main>
