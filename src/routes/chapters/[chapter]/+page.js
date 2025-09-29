import { error } from '@sveltejs/kit';
import chapters from '../../../lib/data/chapters';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const chapter = chapters.find((chapter) => chapter.location === params.chapter);
	if (chapter) {
		return chapter;
	} else {
		error(404, 'Not found');
	}
}
