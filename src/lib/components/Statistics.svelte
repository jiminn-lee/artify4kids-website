<script>
	import { onMount } from 'svelte';

	let stats = [];

	onMount(() => {
		const sheetId = '1JYU6HJNFA60e-F3DlEzNotwA81lBq5VLbOxS8vTP1VY';
		const sheetName = encodeURIComponent('Artify Stats');
		const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

		fetch(sheetURL)
			.then((response) => response.text())
			.then((csvText) => handleResponse(csvText));

		function handleResponse(csvText) {
			csvText = csvText.replace(/["]+/g, '');
			stats = csvToObject(csvText);
		}

		function csvToObject(csv) {
			let objects = [];

			const rows = csv.split(`\n`);
			const names = rows[0].split(',');
			const numbers = rows[1].split(',');

			for (let i = 0; i < names.length; i++) {
				let object = {};
				object.label = names[i];
				object.value = numbers[i];
				objects.push(object);
			}

			return objects;
		}
	});
</script>

<main class="flex justify-center gap-16 mt-28">
	{#each stats as stat}
		<div class="text-center">
			<h1 class="font-bold text-5xl mb-4">{stat.value}</h1>
			<h1 class="font-semibold">{stat.label}</h1>
		</div>
	{/each}
</main>
