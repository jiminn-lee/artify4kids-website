<script>
	import { twMerge } from 'tailwind-merge';
	import Button from './Button.svelte';
	export let btnClass = 'border-2 border-white hover:bg-white hover:text-black';

	let classList = '';
	export { classList as class };
</script>

<nav class={twMerge('fixed top-0 z-10 flex w-full items-center px-12 py-6 text-white', classList)}>
	<a href="/" class="flex items-center">
		<img src="/favicon-96.png" alt="" class="mr-2 w-10" />
		<h1 class="text-2xl font-semibold">Artify4Kids</h1>
	</a>
	<ul class="ml-auto flex list-none text-lg">
		<li>
			<a
				href="/about-us"
				class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>About Us</a
			>
		</li>
		<li>
			<a
				href="/news-blog"
				class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>News & Blog</a
			>
		</li>
		<li>
			<a
				href="/upcoming"
				class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>Upcoming</a
			>
		</li>
		<li class="pl-4"><Button text="Take Action" href="/take-action" class={btnClass} /></li>
	</ul>
</nav>
