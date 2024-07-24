<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import options from '$lib/grainedOptions';

	let header;
	onMount(() => {
		grained('#header', options);
		headerHeight.set(header.clientHeight);
	});

	export let data;
</script>

<svelte:head>
	<script src="../src/lib/grained.js"></script>
	<title>{data.meta.title}</title>
	<meta propery="og:type" content="article" />
	<meta propery="og:title" content={data.meta.title} />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<section
	id="header"
	class="h-[50vh] flex flex-col justify-center items-center bg-a-blue"
	bind:this={header}
>
	<h1 class="text-white text-8xl font-bold mb-8">News & Blog</h1>
	<p class="text-white font-light italic text-center w-[550px]">
		As a non-profit organization, we aim to provide accessible arts and crafts education to
		underserved children in the Bay Area. Join us in empowering young artists!
	</p>
</section>
<article class="bg-a-blue-bg flex justify-center" id="article">
	<div class="w-[1000px] bg-white rounded-3xl border-2 border-a-black/10 my-28 px-28 py-20">
		<h1 class="text-4xl font-bold">{data.meta.title}</h1>
		<h2 class="mb-14 mt-3">Published {data.meta.date}</h2>
		<p class="font-light leading-relaxed">
			<svelte:component this={data.content} />
		</p>
	</div>
</article>
