'use server'

import type { UserSession } from '@/app/types/user/userSession.type';

export default async function getProfileData({ name, value }: { name: string, value: string }): Promise<UserSession | boolean> {

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
		let json = await response.json() as UserSession;
		return json;
	} else {
		console.log(`getProfileData: failure`);
		return false
	}


}
