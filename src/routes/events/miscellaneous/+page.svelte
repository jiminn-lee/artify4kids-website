<script>
	import { ArrowLeft } from 'lucide-svelte';

	import events from '$lib/events.js';
</script>

<main class="bg-a-purple-bg flex flex-col py-24">
	<a
		href="/events"
		class="hover:bg-a-black/5 ml-10 flex w-fit items-center gap-2 rounded-3xl px-2 py-1 text-xl transition"
		><ArrowLeft />Back</a
	>
	<div class="mt-10 flex flex-wrap justify-center gap-4">
		{#each events[5].events as event}
			<div
				class="border-a-purple-hover/50 flex h-fit w-[360px] flex-col items-center justify-center gap-4 rounded-3xl border-2 bg-white py-8"
			>
				<img
					loading="lazy "
					src={event.image}
					alt=""
					class="h-[225px] w-[300px] rounded-xl bg-slate-400 object-cover"
				/>
				<h1 class="text-a-black px-8 text-center text-3xl font-bold text-wrap">{event.name}</h1>
				<!-- <p></p> -->
				<button
					class="border-a-purple bg-a-purple hover:border-a-purple-hover hover:bg-a-purple-hover w-fit rounded-3xl border-2 px-4 text-lg text-white transition-all active:translate-y-0.5"
					><a href="/events/miscellaneous/{event.id}">See gallery</a></button
				>
			</div>
		{/each}
	</div>
</main>
