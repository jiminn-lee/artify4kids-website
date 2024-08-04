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
		class="h-[40vh] flex flex-col justify-center items-center bg-a-red"
		bind:this={header}
	>
		<h1 class="text-white text-8xl font-bold mb-4">Take Action</h1>
		<p class="text-white font-light italic text-center w-[550px]">
			Whether you lean towards participating in person or if you'd rather contribute from the
			coziness of your home, we have procedures tailored to your preferences!
		</p>
	</section>
</main>
