<script>
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';
	import chapters from '$lib/chapters';
	import { selectedChapter } from '$lib/stores';
	import markerIcon from 'leaflet/dist/images/marker-icon.png';
	import shadowIcon from 'leaflet/dist/images/marker-shadow.png';

	let mapEl;

	onMount(async () => {
		const leaflet = await import('leaflet');
		const map = leaflet
			.map(mapEl, {
				minZoom: 4.9,
				maxZoom: 9,
				zoomSnap: 0.1,
				// doubleClickZoom: true,
				// scrollWheelZoom: false,
				maxBounds: L.latLngBounds([55.934982, -136.513284], [15.456249, -59.978914])
			})
			.setView([39.860084, -97.708122], 4.5);

		leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

		const icon = new L.Icon({
			iconUrl: markerIcon,
			iconSize: L.point(25, 41),
			iconAnchor: [12, 41],
			shadowUrl: shadowIcon
		});

		chapters.forEach((chapter, i) => {
			const marker = leaflet.marker(chapter.coordinates, { icon: icon }).addTo(map);
			marker.on('click', () => {
				selectedChapter.set(i);
			});
		});
	});
</script>

<div bind:this={mapEl} class="z-0 h-[800px] w-full"></div>
