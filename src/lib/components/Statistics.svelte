<script>
	export let stats = [];
</script>

<div id="statistics-container" class="flex justify-center mt-32 mb-10 gap-16 flex-wrap">
	{#each stats as stat}
		<div class="text-center group transition-all hover:scale-105 duration-200">
			<h1 class="font-bold text-5xl mb-4 text-a-red group-hover:text-a-red-hover transition-all">
				{stat.value}
			</h1>
			<h1 class="font-semibold text-a-grey group-hover:text-a-black transition-all">
				{stat.label}
			</h1>
		</div>
	{/each}
</div>
