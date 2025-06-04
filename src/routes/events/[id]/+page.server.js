import { error } from '@sveltejs/kit';
import { RefreshCcw } from 'lucide-svelte';

export const load = async ({ fetch, params }) => {
	let images = null;
	const res = await fetch(`/api/images?event=${params.id}`);
	if (res.status === 200) {
		images = res.json();
		return images;
	} else {
		error(res.status, res.statusText);
	}
};
