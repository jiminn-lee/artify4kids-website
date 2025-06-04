import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	let images = null;
	const res = await fetch(`/api/images?event=summer`);
	if (res.status === 200) {
		images = res.json();
		return images;
	} else {
		error(res.status, res.statusText);
	}
};
