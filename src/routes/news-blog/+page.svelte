<script>
	import { scrollDistance } from '$lib/stores';
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';

	export let data;
</script>

<svelte:head>
	<title>News & Blog | Artify4Kids</title>
	<meta property="og:title" content="News & Blog | Artify4Kids" />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<Header
		title="News & Blog"
		description="Read the latest news of Artify through the news and blog posts below!"
		color="bg-a-blue"
	/>
	<section class="bg-a-blue-bg">
		<div class="ml-auto mr-auto flex w-3/4 flex-wrap justify-center gap-5 py-32">
			{#each data.posts as post}
				<a href={`news-blog/${post.slug}`} class="h-96 w-72">
					<div
						style={post.thumbnail
							? `background-image: url(${post.thumbnail});`
							: 'background-color: #64A3F5'}
						class={`h-96 w-72 rounded-3xl border-2 border-a-blue-hover/50 bg-[length:auto_55%] bg-[center_top] bg-no-repeat transition-transform hover:-translate-y-2`}
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
