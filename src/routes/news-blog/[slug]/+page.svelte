<script>
	import { scrollDistance } from '$lib/stores';
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | Artify4Kids</title>
	<meta propery="og:type" content="article" />
	<meta propery="og:title" content={data.meta.title} />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<Header
	title="News & Blog"
	description="Read the latest news of Artify through the news and blog posts below!"
	color="bg-a-blue"
/>
<article class="flex justify-center bg-a-blue-bg" id="article">
	<div class="w-[1000px] bg-white md:my-28 md:rounded-3xl md:border-2 md:border-a-blue-hover/50">
		<div class="flex pb-7 pl-12 pt-12 font-light text-a-grey">
			<a
				href="/news-blog"
				class="rounded-3xl p-2 transition-all hover:bg-a-black/5 active:bg-a-black/10"
				><svg
					fill="#454343"
					height="20"
					width="20"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
					/></svg
				></a
			>
		</div>
		<div class="px-14 pb-28 md:px-28">
			<h1 class="text-3xl font-bold md:text-4xl">{data.meta.title}</h1>
			<h2 class="mb-14 mt-3">Published {formatDate(data.meta.date)}</h2>
			<p class="font-light leading-relaxed">
				<svelte:component this={data.content} />
			</p>
		</div>
	</div>
</article>

<style>
	* {
		position: relative;
	}
</style>
