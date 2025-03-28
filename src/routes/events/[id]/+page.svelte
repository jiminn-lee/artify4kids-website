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

<main class="flex h-[900px] justify-center bg-a-purple-bg pt-20">
	<h1 class="mt-10 text-6xl font-bold">{events[$page.params.id].name}</h1>
</main>
