<script>
	import { scrollDistance } from '$lib/stores';
	import Header from '$lib/components/Header.svelte';

	import events from '$lib/events';
</script>

<svelte:head>
	<title>Events | Artify4Kids</title>
	<meta property="og:title" content="Upcoming | Artify4Kids" />
</svelte:head>

<svelte:window bind:scrollY={$scrollDistance} />

<main>
	<Header
		title="Events"
		description="Below are all the details about our scheduled events and lessons!"
		color="bg-a-purple"
	/>
	<section class="bg-a-purple-bg flex flex-col gap-4 py-28">
		{#each events as event, i}
			<div
				class="border-a-purple-hover/50 mx-[5%] flex h-fit items-center rounded-3xl border-2 bg-white p-8 transition-all hover:-translate-y-2 max-[986px]:flex-col max-[986px]:gap-4"
			>
				<img
					loading="lazy "
					src={event.image}
					alt=""
					class="mr-6 h-[225px] min-w-[300px] rounded-xl bg-slate-400 object-cover"
				/>
				<div>
					<h1 class="text-a-black mb-2 text-left text-3xl font-bold">{event.name}</h1>
					<p class="mr-[5%]">{event.details}</p>
					<button
						class="border-a-purple bg-a-purple hover:border-a-purple-hover hover:bg-a-purple-hover mt-2 w-fit rounded-3xl border-2 px-4 text-lg text-white transition-all active:translate-y-0.5"
						><a href="/events/{event.id}">See gallery</a></button
					>
				</div>
			</div>
		{/each}
	</section>
</main>
