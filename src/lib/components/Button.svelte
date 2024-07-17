<script>
	import { twMerge } from 'tailwind-merge';

	export let href;
	export let text;
	let classList = '';
	export { classList as class };
</script>

<button
	class={twMerge('rounded-3xl px-4 transition-all text-lg w-fit active:translate-y-0.5', classList)}
>
	<a {href}>{text}</a>
</button>
