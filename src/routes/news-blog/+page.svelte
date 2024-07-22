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
	<script src="src/lib/grained.js"></script>
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
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
	<section>
		<ul>
			{#each data.posts as post}
				<li>
					<a href={`news-blog/${post.slug}`}>{post.title}</a>
					<p>{post.date}</p>
				</li>
			{/each}
		</ul>
	</section>
</main>
