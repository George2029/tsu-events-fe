'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updateFirstName(firstName: string): Promise<boolean> {

	let sid = cookies().get('connect.sid');

	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/firstName`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({
					firstName
				})
			})
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	if (!res.ok) {
		let resJson = await res.json();
		console.log(`firstName update failed: `, resJson);
	}

	return res.ok;
}
