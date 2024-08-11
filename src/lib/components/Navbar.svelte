<script>
	import Button from './Button.svelte';

	export let navClass =
		'fixed top-0 z-10 flex w-full items-center px-12 py-6 text-white max-[985px]:hidden';
	export let buttonClass = 'border-2 border-white hover:bg-white hover:text-black';

	export let mobileNavClass =
		'fixed top-0 z-10 flex w-full items-center justify-between px-12 py-6 text-white min-[986px]:hidden';
	export let mobileButtonClass =
		'rounded-full border-2 p-2 border-white hover:bg-white group transition-all active:translate-y-0.5';
	export let mobileSvgClass = 'fill-white group-hover:fill-a-black';
	let mobileDialog;
</script>

<nav class={navClass}>
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
				href="/chapters"
				class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
				>Chapters</a
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
		<li class="pl-4"><Button text="Take Action" href="/take-action" class={buttonClass} /></li>
	</ul>
</nav>
<nav class={mobileNavClass}>
	<a href="/" class="flex items-center">
		<img src="/favicon-96.png" alt="" class="mr-2 w-10" />
		<h1 class="text-2xl font-semibold">Artify4Kids</h1>
	</a>
	<button on:click={() => mobileDialog.showModal()} class={mobileButtonClass}>
		<svg
			width="20"
			height="20"
			class={mobileSvgClass}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
			/></svg
		>
	</button>
</nav>
<dialog bind:this={mobileDialog} class="rounded-3xl">
	<div class="flex h-fit w-fit flex-col items-center justify-center p-12">
		<a on:click={() => mobileDialog.close()} href="/" class="mb-2 flex items-center">
			<img src="/favicon-96.png" alt="" class="mr-2 w-10" />
			<h1 class="text-2xl font-semibold">Artify4Kids</h1>
		</a>
		<ul class="list-none text-center text-lg">
			<li class="my-2">
				<a
					on:click={() => mobileDialog.close()}
					href="/about-us"
					class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
					>About Us</a
				>
			</li>
			<li class="my-2">
				<a
					on:click={() => mobileDialog.close()}
					href="/chapters"
					class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
					>Chapters</a
				>
			</li>
			<li class="my-2">
				<a
					on:click={() => mobileDialog.close()}
					href="/news-blog"
					class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
					>News & Blog</a
				>
			</li>
			<li class="my-2">
				<a
					on:click={() => mobileDialog.close()}
					href="/upcoming"
					class="rounded-3xl px-4 py-1 leading-relaxed transition-all hover:bg-a-black/5 active:bg-a-black/10"
					>Upcoming</a
				>
			</li>
			<li class="mt-4">
				<button
					on:click={() => mobileDialog.close()}
					class="w-fit rounded-3xl border-2 border-a-red bg-a-red px-4 text-lg text-white transition-all hover:border-a-red-hover hover:bg-a-red-hover active:translate-y-0.5"
					><a href="/take-action">Take Action</a></button
				>
			</li>
		</ul>
	</div>
</dialog>
