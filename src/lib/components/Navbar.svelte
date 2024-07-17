<script>
	import { twMerge } from 'tailwind-merge';
	import Button from './Button.svelte';
	export let btnClass = 'border-2 border-white hover:bg-white hover:text-black';

	let classList = '';
	export { classList as class };
</script>

<nav class={twMerge('fixed top-0 w-full z-10 flex text-white px-12 py-8', classList)}>
	<a href="/">
		<img src="" alt="" />
		<button class="font-semibold text-2xl">Artify4Kids</button>
	</a>
	<div class="ml-auto text-lg">
		<button class="mr-7 hover:"><a id="about-us" href="/about-us">About Us</a></button>
		<button class="mr-7"><a id="news-blog" href="/news-blog">News & Blog</a></button>
		<button class="mr-7"><a id="upcoming" href="/upcoming">Upcoming</a></button>
		<Button text="Take Action" href="/take-action" class={btnClass} />
	</div>
</nav>
