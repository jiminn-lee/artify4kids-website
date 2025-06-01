import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { json } from '@sveltejs/kit';

import {
	CF_R2_ACCESS_KEY_ID,
	CF_R2_SECRET_ACCESS_KEY,
	CF_R2_ACCOUNT_ID,
	CF_R2_BUCKET_NAME
} from '$env/static/private';

const S3 = new S3Client({
	region: 'auto',
	endpoint: `https://${CF_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: CF_R2_ACCESS_KEY_ID,
		secretAccessKey: CF_R2_SECRET_ACCESS_KEY
	},
	requestChecksumCalculation: 'WHEN_REQUIRED',
	responseChecksumValidation: 'WHEN_REQUIRED'
});

export async function GET({ request }) {
	try {
		const images = await S3.send(
			new ListObjectsV2Command({ Bucket: 'artify4kids', Prefix: 'ellis/' })
		);
		return json(images);
	} catch (error) {
		console.error('Error fetching event images:', error);
		return json({ error: 'Failed to fetch images.' }, { status: 500 });
	}
}
