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
	<title>News & Blog | Artify4Kids</title>
	<meta property="og:title" content="News & Blog | Artify4Kids" />
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<section
		id="header"
		class="h-[40vh] flex flex-col justify-center items-center bg-a-blue"
		bind:this={header}
	>
		<h1 class="text-white text-8xl font-bold mb-8">News & Blog</h1>
		<p class="text-white font-light italic text-center w-[550px]">
			As a non-profit organization, we aim to provide accessible arts and crafts education to
			underserved children in the Bay Area. Join us in empowering young artists!
		</p>
	</section>
	<section class="bg-a-blue-bg">
		<div class="flex py-32 gap-5 flex-wrap justify-center w-3/4 ml-auto mr-auto">
			{#each data.posts as post}
				<a href={`news-blog/${post.slug}`} class="h-96 w-72">
					<div
						style={`background-image: url(${post.thumbnail});`}
						class={`h-96 w-72 bg-no-repeat rounded-3xl bg-[length:auto_55%] bg-[center_top] border-2 border-a-black/10 hover:-translate-y-2 transition-transform`}
					>
						<div class="h-[55%]"></div>
						<div class="p-4 bg-white h-[45%] rounded-b-3xl">
							<h2 class="text-a-grey font-light">{post.date}</h2>
							<h1 class="font-bold text-xl text-a-black">{post.title}</h1>
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
