<script>
	import { onMount } from 'svelte';
	import { scrollDistance, headerHeight } from '$lib/stores';
	import grainedOptions from '$lib/utils';
	import { formatDate } from '$lib/utils';

	let header;
	onMount(() => {
		grained('#header', grainedOptions);
		headerHeight.set(header.clientHeight);
	});

	export let data;
</script>

<svelte:head>
	<title>News & Blog | Artify4Kids</title>
	<meta property="og:title" content="News & Blog | Artify4Kids" />
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section
		id="header"
		class="flex h-[40vh] flex-col items-center justify-center bg-a-blue"
		bind:this={header}
	>
		<h1 class="mb-4 text-8xl font-bold text-white">News & Blog</h1>
		<p class="w-[550px] text-center font-light italic text-white">
			As a non-profit organization, we aim to provide accessible arts and crafts education to
			underserved children in the Bay Area. Join us in empowering young artists!
		</p>
	</section>
	<section class="bg-a-blue-bg">
		<div class="ml-auto mr-auto flex w-3/4 flex-wrap justify-center gap-5 py-32">
			{#each data.posts as post}
				<a href={`news-blog/${post.slug}`} class="h-96 w-72">
					<div
						style={`background-image: url(${post.thumbnail});`}
						class={`h-96 w-72 rounded-3xl border-2 border-a-black/10 bg-[length:auto_55%] bg-[center_top] bg-no-repeat transition-transform hover:-translate-y-2`}
					>
						<div class="h-[55%]"></div>
						<div class="h-[45%] rounded-b-3xl bg-white p-4">
							<h2 class="font-light text-a-grey">{formatDate(post.date)}</h2>
							<h1 class="text-xl font-bold text-a-black">{post.title}</h1>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
</main>

<style>
	* {
		position: relative;
	}
</style>
