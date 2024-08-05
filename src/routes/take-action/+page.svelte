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
	<title>Take Action | Artify4Kids</title>
	<meta property="og:title" content="About Us | Artify4Kids" />
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section
		id="header"
		class="flex h-[40vh] flex-col items-center justify-center bg-a-red"
		bind:this={header}
	>
		<h1 class="mb-4 text-8xl font-bold text-white">Take Action</h1>
		<p class="w-[550px] text-center font-light italic text-white">
			Whether you lean towards participating in person or if you'd rather contribute from the
			coziness of your home, we have procedures tailored to your preferences!
		</p>
	</section>
</main>
