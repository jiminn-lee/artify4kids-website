<script>
	import { onMount, createEventDispatcher } from 'svelte';

	export let src;
	export let alt = '';

	// Track whether this cell is visible (i.e. in viewport)
	let visible = false;

	// Track whether the actual <img> has loaded
	let loaded = false;

	// Reference to the wrapper div in the DOM
	let container;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible = true;
						loaded = false;
					} else {
						visible = false;
						loaded = false;
					}
				}
			},
			{
				root: null, // viewport
				rootMargin: '200px', // start loading just before it scrolls fully into view
				threshold: 0.1
			}
		);

		observer.observe(container);

		return () => observer.disconnect();
	});

	// When the <img> fires “load”, set loaded→true
	function handleLoad() {
		loaded = true;
	}
</script>

<div bind:this={container} class="relative h-[300px] w-[300px] overflow-hidden bg-purple-300">
	{#if visible}
		<!--
      The <img> is inserted only once “visible” is true. 
      It starts with opacity-0, then onload it toggles to opacity-100.
    -->
		<img
			{src}
			{alt}
			on:load={handleLoad}
			class="
        absolute inset-0
        h-full w-full object-cover
        opacity-0 transition-opacity duration-300
        {loaded ? 'opacity-100' : ''}
      "
		/>
	{/if}
</div>
