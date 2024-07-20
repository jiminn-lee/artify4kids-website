<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import options from '$lib/grainedOptions';

	let header;
	onMount(() => {
		grained('#header', options);
		headerHeight.set(header.clientHeight);
	});
</script>

<svelte:head>
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section
		id="header"
		class="h-[50vh] flex flex-col justify-center items-center bg-a-purple"
		bind:this={header}
	>
		<h1 class="text-white text-8xl font-bold mb-8">Upcoming</h1>
		<p class="text-white font-light italic text-center w-[550px]">
			Below are all the details about our scheduled events and lessons!
		</p>
	</section>
</main>
