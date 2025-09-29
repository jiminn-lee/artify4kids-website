<script>
	import Star from 'phosphor-svelte/lib/Star';
	import { selectedLocation } from '../../routes/chapters/state.svelte';
	let { location } = $props();
</script>

<a
	href="/chapters/{location}"
	class="pointer-events-auto flex cursor-pointer flex-col items-center"
>
	<Star
		size={32}
		weight="fill"
		class="peer text-a-purple hover:text-a-red-hover drop-shadow-sm drop-shadow-white transition hover:z-auto hover:scale-150 active:scale-100"
	/>
	<!-- <StarFour
		weight="fill"
		size={Math.min(8 + Math.log1p(location.number_of_schools) * 10, 50)}
		class="peer z-0 text-indigo-200 drop-shadow-2xl drop-shadow-indigo-600 transition hover:text-indigo-600"
	/> -->
	<div
		class="invisible absolute -top-8 z-50 flex flex-col items-center text-center text-nowrap text-white peer-hover:visible"
	>
		<h1 class="tracking-tigher bg-a-red w-fit p-1 font-serif text-xl leading-5 italic">
			{location}
		</h1>
		<!-- <h2 class="text-shadow-md/60">
			{location.number_of_schools}
			{location.number_of_schools > 1 ? 'schools' : 'school'}
		</h2> -->
	</div>
</a>
