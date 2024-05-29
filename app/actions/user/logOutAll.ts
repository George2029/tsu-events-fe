'use server'

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function logOutAll() {
	const sid = cookies().get('connect.sid');

	if (!sid) {
		return redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/auth/logoutAll`, {
			method: 'POST',
			headers: {
				Cookie: `${sid.name}=${sid.value}`
			}
		});
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message)
		}
	}

	console.log(`successful total logOut`);
	cookies().delete('connect.sid');
	return redirect(`https://${process.env.DOMAIN_NAME}/signin`);
}
