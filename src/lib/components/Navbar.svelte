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
		<h1 class="font-semibold text-2xl">Artify4Kids</h1>
	</a>
	<ul class="ml-auto text-lg list-none flex gap-7">
		<li><a href="/about-us">About Us</a></li>
		<li><a href="/news-blog">News & Blog</a></li>
		<li><a href="/upcoming">Upcoming</a></li>
		<li><Button text="Take Action" href="/take-action" class={btnClass} /></li>
	</ul>
</nav>
