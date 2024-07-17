<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
</script>

{#if $scrollDistance > $headerHeight}
	<Navbar
		class="text-a-black bg-white border-2 border-a-black/10 py-4 rounded-full m-4 w-[calc(100%-2em)]"
		btnClass="border-2 border-a-red bg-a-red text-white hover:bg-a-red-hover hover:border-a-red-hover"
	/>
{:else}
	<Navbar />
{/if}
<slot />
