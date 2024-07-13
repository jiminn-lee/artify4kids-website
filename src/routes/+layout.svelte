<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { distanceY, height } from '$lib/stores';
</script>

{#if $distanceY > $height - 60}
	<Navbar
		class="text-black bg-white border-2 border-black/10 py-4 rounded-full m-4 w-[calc(100%-2em)]"
		btnClass="border-artify-red bg-artify-red text-white hover:bg-artify-red hover:text-white"
	/>
{:else}
	<Navbar />
{/if}
<slot />
