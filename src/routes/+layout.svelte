<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
</script>

{#if $scrollDistance > $headerHeight - 200}
	<Navbar
		navClass="m-4 w-[calc(100%-2em)] rounded-full border-2 border-a-black/10 bg-white py-2 text-a-black fixed top-0 z-10 flex items-center px-6 md:px-12 max-[985px]:hidden"
		buttonClass="border-2 border-a-red bg-a-red text-white hover:bg-a-red-hover hover:border-a-red-hover"
		mobileNavClass="m-4 w-[calc(100%-2em)] rounded-full border-2 border-a-black/10 bg-white py-2 text-a-black fixed top-0 z-10 flex items-center px-6 md:px-12 justify-between min-[986px]:hidden"
		mobileButtonClass="hover:bg-a-black/5 active:bg-a-black/10 rounded-full p-2 transition-all"
		mobileSvgClass="fill-a-black"
	/>
{:else}
	<Navbar />
{/if}
<slot />
<Footer />
