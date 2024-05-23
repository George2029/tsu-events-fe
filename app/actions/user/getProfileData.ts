'use server'

import type { UserSession } from '@/app/types/user/userSession.type';

export default async function getProfileData({ name, value }: { name: string, value: string }): Promise<UserSession | boolean> {

	let response: any;

	try {
		response = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user`, {
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
		let user = await response.json();
		user.createdAt = new Date(user.createdAt);
		return user;
	} else {
		let res = await response.json();
		console.log(res);
		console.log(`getProfileData: failure`);
		return false
	}


}
