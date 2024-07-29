<script>
	import { twMerge } from 'tailwind-merge';
	import Button from './Button.svelte';
	export let btnClass = 'border-2 border-white hover:bg-white hover:text-black';

	let classList = '';
	export { classList as class };
</script>

<nav class={twMerge('fixed top-0 w-full z-10 flex text-white px-12 py-6 items-center', classList)}>
	<a href="/" class="flex items-center">
		<img src="/favicon-96.png" alt="" class="w-10 mr-2" />
		<h1 class="font-semibold text-2xl">Artify4Kids</h1>
	</a>
	<ul class="ml-auto text-lg list-none flex">
		<li>
			<a
				href="/about-us"
				class="hover:bg-a-black/5 active:bg-a-black/10 transition-all rounded-3xl px-4 py-1 leading-relaxed"
				>About Us</a
			>
		</li>
		<li>
			<a
				href="/news-blog"
				class="hover:bg-a-black/5 active:bg-a-black/10 transition-all rounded-3xl px-4 py-1 leading-relaxed"
				>News & Blog</a
			>
		</li>
		<li>
			<a
				href="/upcoming"
				class="hover:bg-a-black/5 active:bg-a-black/10 transition-all rounded-3xl px-4 py-1 leading-relaxed"
				>Upcoming</a
			>
		</li>
		<li class="pl-4"><Button text="Take Action" href="/take-action" class={btnClass} /></li>
	</ul>
</nav>
