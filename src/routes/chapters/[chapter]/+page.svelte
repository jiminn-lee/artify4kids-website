<script>
	import { scrollDistance } from '$lib/stores';
	import Header from '$lib/components/Header.svelte';
	let { data } = $props();
	$inspect(data);
</script>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<Header title={data.location} description="" color="bg-a-green" />
	<div class="flex flex-col items-center gap-12 py-28">
		<h1 class="text-5xl font-bold">Meet the team</h1>
		<div class="flex w-3/4 flex-wrap justify-center gap-5">
			{#each data.team as member}
				<div
					id="team"
					style={`background-image: url(${member.headshot});`}
					class={`border-a-green-hover/50 h-96 w-72 rounded-3xl border-2 bg-white bg-size-[100%_auto] bg-position-[center_top_-1rem] bg-no-repeat transition-transform hover:-translate-y-2`}
				>
					<div class="h-[65%]"></div>
					<div class="w-full bg-white p-4">
						<h2 class=" text-a-grey pt-2 font-light">{member.position}</h2>
						<h1 class="text-a-black text-xl font-bold">{member.name}</h1>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>
