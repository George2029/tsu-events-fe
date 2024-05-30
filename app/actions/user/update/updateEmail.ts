'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updateEmail(email: string): Promise<boolean> {

	let sid = cookies().get('connect.sid');

	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/emailUpdate/${email}`,
			{
				method: 'POST',
				headers: {
					Cookie: `${sid.name}=${sid.value}`
				},
			})
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	if (!res.ok) {
		console.log(await res.json());
	}

	return res.ok;

}
