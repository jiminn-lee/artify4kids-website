import { MAILER_LITE_KEY } from '$env/static/private';

export const actions = {
	newsletter: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
			method: 'POST',
			body: JSON.stringify({ email: email, groups: ['156757926458951157'] }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${MAILER_LITE_KEY}`
			}
		});

		return { success: true, type: 'newsletter' };
	},
	volunteers: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
			method: 'POST',
			body: JSON.stringify({ email: email, groups: ['155210285661029933'] }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${MAILER_LITE_KEY}`
			}
		});
		return { success: true, type: 'volunteers' };
	}
};
