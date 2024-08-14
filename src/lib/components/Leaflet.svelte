<script>
	import { onMount, onDestroy, setContext, createEventDispatcher, tick } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	export let bounds;
	export let view;
	export let zoom;

	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

		map = L.map(mapElement, {
			minZoom: 4.5,
			maxZoom: 9,
			zoomSnap: 0.1,
			doubleClickZoom: true,
			scrollWheelZoom: false,
			maxBounds: L.latLngBounds([55.934982, -136.513284], [15.456249, -59.978914])
		})
			.on('zoom', (e) => dispatch('zoom', e))
			.on('popupopen', async (e) => {
				await tick();
				e.popup.update();
			});

		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`
		}).addTo(map);
	});

	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

	setContext('map', {
		getMap: () => map
	});

	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}
</script>

<div class="z-0 h-[800px] w-full" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>
