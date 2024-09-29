<script>
	import { onMount } from 'svelte';
	import { headerHeight } from '$lib/stores';
	import grainedOptions from '$lib/utils';

	export let title;
	export let description;
	export let color;

	let header;

	onMount(async () => {
		await import('$lib/grained');
		grained('#header', grainedOptions);
		headerHeight.set(header.clientHeight - 200);
	});
</script>

<section
	id="header"
	class="flex h-[400px] flex-col items-center justify-center {color}"
	bind:this={header}
>
	<h1
		class="mx-10 mb-4 text-center text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] md:text-8xl"
	>
		{title}
	</h1>
	<p
		class="md mx-10 max-w-[550px] text-center text-sm font-light italic text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] md:text-base"
	>
		{description}
	</p>
</section>
