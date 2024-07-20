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
		class="h-[50vh] flex flex-col justify-center items-center bg-a-red"
		bind:this={header}
	>
		<h1 class="text-white text-8xl font-bold mb-8">Take Action</h1>
		<p class="text-white font-light italic text-center w-[550px]">
			Whether you lean towards participating in person or if you'd rather contribute from the
			coziness of your home, we have procedures tailored to your preferences!
		</p>
	</section>
</main>
