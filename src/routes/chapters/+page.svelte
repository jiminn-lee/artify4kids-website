<script>
	import { scrollDistance, selectedChapter } from '$lib/stores';
	import Header from '$lib/components/Header.svelte';
	import Map from '$lib/components/Map.svelte';
	import chapters from '$lib/chapters.js';
	import info from '$lib/info.js';
</script>

<svelte:head>
	<title>Chapters | Artify4Kids</title>
	<meta property="og:title" content="About Us | Artify4Kids" />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<Header
		title="Chapters"
		description="Check out other chapters of Artify4Kids through this interactive map!"
		color="bg-a-green"
	/>
	<section class="flex h-fit w-full flex-col-reverse bg-a-green-bg xl:flex-row">
		{#if $selectedChapter == 0}
			<div
				class="flex h-fit w-full flex-col items-center justify-center bg-white py-14 md:px-14 xl:h-[800px] xl:w-[800px] xl:border-r-2 xl:border-r-a-green-hover/50"
			>
				<div class="mb-8 flex items-center justify-center">
					<svg
						width="30px"
						height="30px"
						class="mr-2 fill-a-red"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
						/></svg
					>
					<h1 class="text-center text-4xl font-bold text-a-red">Bay Area, CA</h1>
				</div>
				<div class="flex flex-wrap justify-center gap-2">
					{#each info.team as member}
						<img
							src={member.img}
							alt=""
							class="h-[150px] w-[150px] rounded-3xl border-2 border-a-green-hover/50 object-cover object-center transition-all hover:-translate-y-1"
						/>
					{/each}
				</div>
			</div>
		{:else}
			<div
				class="flex h-fit w-full flex-col items-center justify-center bg-white py-14 md:px-14 xl:h-[800px] xl:w-[800px] xl:border-r-2 xl:border-r-a-green-hover/50"
			>
				<div class=" mb-8 flex items-center justify-center">
					<svg
						width="30px"
						height="30px"
						class="mr-2 fill-a-black"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
						/></svg
					>
					<h1 class=" text-center text-4xl font-bold text-a-black">
						{chapters[$selectedChapter].location}
					</h1>
				</div>
				<div class="flex flex-wrap justify-center gap-2">
					{#if chapters[$selectedChapter].headshots}
						{#each chapters[$selectedChapter].headshots as headshot}
							<img
								src={headshot}
								alt=""
								class="h-[150px] w-[150px] rounded-3xl border-2 border-a-green-hover/50 object-cover object-center transition-all hover:-translate-y-1"
							/>
						{/each}
					{/if}
				</div>
				<button
					class="mt-8 w-fit rounded-3xl border-2 border-a-red bg-a-red px-4 text-lg text-white transition-all hover:border-a-red-hover hover:bg-a-red-hover active:translate-y-0.5"
					><a href={chapters[$selectedChapter].link} target="_blank" rel="noopener noreferrer"
						>See more</a
					></button
				>
			</div>
		{/if}
		<Map />
	</section>
</main>

<style>
	* {
		position: relative;
	}
</style>
