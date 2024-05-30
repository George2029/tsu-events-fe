'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updateUsername(username: string): Promise<boolean> {

	let sid = cookies().get('connect.sid');

	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/username`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({
					username
				})
			})
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	if (!res.ok) {
		console.log(`UPDATE USERNAME FAILED: `, await res.json());
	}
	return res.ok;

}
