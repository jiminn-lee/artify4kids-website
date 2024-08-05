<script>
	import { twMerge } from 'tailwind-merge';

	export let href;
	export let text;
	let classList = '';
	export { classList as class };
</script>

<button
	class={twMerge('w-fit rounded-3xl px-4 text-lg transition-all active:translate-y-0.5', classList)}
>
	<a {href}>{text}</a>
</button>
