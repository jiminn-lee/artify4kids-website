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
