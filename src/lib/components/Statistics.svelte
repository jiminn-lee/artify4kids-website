<script>
	export let stats = [];
</script>

<div id="statistics-container" class="mb-10 mt-32 flex flex-wrap justify-center gap-16">
	{#each stats as stat}
		<div class="group text-center transition-all duration-300 hover:scale-105">
			<h1 class="mb-4 text-5xl font-bold text-a-red transition-all group-hover:text-a-red-hover">
				{stat.value}
			</h1>
			<h1 class="font-semibold text-a-grey transition-all group-hover:text-a-black">
				{stat.label}
			</h1>
		</div>
	{/each}
</div>
