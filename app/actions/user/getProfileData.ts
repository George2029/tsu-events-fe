'use server'

import type { SafeUser } from '@/app/types/user/safeUser.type';

export default async function getProfileData({ name, value }: { name: string, value: string }): Promise<SafeUser | boolean> {

	let response: any;

	try {
		response = await fetch('http://localhost:3000/user', {
			cache: 'no-store',
			headers: {
				Cookie: `${name}=${value}`
			}
		});
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	if (response.ok) {
		console.log(`getProfileData: success`);
		let json: SafeUser = await response.json();
		return json;
	} else {
		console.log(`getProfileData: failure`);
		return false
	}


}
