import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	console.log(params.id);
	let images = null;
	const res = await fetch(`/api/images?event=${params.id}&miscellaneous=true`);
	if (res.status === 200) {
		images = res.json();
		return images;
	} else {
		error(res.status, res.statusText);
	}
};
