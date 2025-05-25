export function formatDate(date, dateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

const grainedOptions = {
	animate: false,
	patternWidth: 100,
	patternHeight: 100,
	grainOpacity: 0.05,
	grainDensity: 1,
	grainWidth: 1,
	grainHeight: 1
};

export default grainedOptions;

export async function load_image(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();

		if (url === null || url === undefined) {
			reject('Given url for image was null or undefined');
		} else {
			img.src = url;
		}

		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
	});
}
