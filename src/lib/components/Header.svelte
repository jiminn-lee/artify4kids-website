<script>
	import { onMount } from 'svelte';
	import { headerHeight } from '$lib/stores';

	export let title;
	export let description;
	export let color;

	let header;

	onMount(() => {
		headerHeight.set(header.clientHeight);
	});
</script>

<svelte:window on:resize={headerHeight.set(header.clientHeight)} />

<section
	id="header"
	class="flex h-[400px] flex-col items-center justify-center {color}"
	bind:this={header}
>
	<h1 class="mx-10 mb-4 text-center text-6xl font-bold text-white drop-shadow-md md:text-8xl">
		{title}
	</h1>
	<p
		class="mx-10 max-w-[550px] text-center text-sm font-light italic text-white drop-shadow-md md:text-base"
	>
		{description}
	</p>
</section>
