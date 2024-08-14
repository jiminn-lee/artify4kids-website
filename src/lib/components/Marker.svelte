<script>
	import { onMount, onDestroy, getContext, setContext } from 'svelte';
	import L, { Icon } from 'leaflet';
	import { selectedChapter } from '$lib/stores';
	import markerIcon from 'leaflet/dist/images/marker-icon.png';
	import shadowIcon from 'leaflet/dist/images/marker-shadow.png';

	// export let width;
	// export let height;
	export let latLng;
	export let index;

	let marker;
	let markerElement;

	const { getMap } = getContext('map');
	const map = getMap();

	setContext('layer', {
		getLayer: () => marker
	});

	onMount(() => {
		if (map) {
			// let icon = L.divIcon({
			// 	html: markerElement,
			// 	className: 'map-marker',
			// 	iconSize: L.point(width, height)
			// });
			const icon = new L.Icon({
				iconUrl: markerIcon,
				iconSize: L.point(25, 41),
				iconAnchor: [12, 41],
				shadowUrl: shadowIcon
			});
			marker = L.marker(latLng, { icon: icon })
				.addTo(map)
				.on('click', (e) => {
					selectedChapter.set(index);
				});
		}
	});

	onDestroy(() => {
		marker?.remove();
		marker = undefined;
	});
</script>

<div bind:this={markerElement}>
	{#if marker}
		<slot />
	{/if}
</div>
