const sheetId = '1JYU6HJNFA60e-F3DlEzNotwA81lBq5VLbOxS8vTP1VY';
const sheetName = encodeURIComponent('Artify Stats');
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(sheetURL);
	const text = await res.text();

	let statObjects = [];

	const rows = text.replace(/["]+/g, '').split(`\n`);
	const names = rows[0].split(',');
	const numbers = rows[1].split(',');

	for (let i = 0; i < names.length; i++) {
		let object = {};
		object.label = names[i];
		object.value = numbers[i];
		statObjects.push(object);
	}

	return { statObjects };
}
