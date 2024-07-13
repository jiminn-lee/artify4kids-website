<script>
	import { twMerge } from 'tailwind-merge';

	export let href;
	export let text;
	let classList = '';
	export { classList as class };
</script>

<button
	class={twMerge(
		'border-white text-white border-2 rounded-3xl px-4 transition-all hover:bg-white hover:text-black text-lg w-fit',
		classList
	)}
>
	<a {href}>{text}</a>
</button>
