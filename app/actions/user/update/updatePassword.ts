'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updatePassword(oldPassword: string, newPassword: string): Promise<boolean> {

	let sid = cookies().get('connect.sid');

	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/account`);
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/password`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({
					oldPassword,
					newPassword
				})
			})
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	let resJson: any;

	if (!res.ok) {
		resJson = await res.json();
		console.log(`UPDATE PASSWORD FAILED: `, resJson);
	}

	return res.ok;

}
