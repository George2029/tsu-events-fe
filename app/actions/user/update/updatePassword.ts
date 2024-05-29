'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type PrevState = {
	message: string
}

export default async function updatePassword(prevState: PrevState, formData: FormData): Promise<PrevState> {

	let sid = cookies().get('connect.sid');

	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/account`);
	}

	let oldPassword = formData.get('oldPassword')?.toString().trim();
	let newPassword = formData.get('newPassword')?.toString().trim();

	if (!oldPassword || !newPassword) {
		return {
			message: 'passwords should not be empty'
		}
	}


	if (newPassword.length < 12) {
		return {
			message: '12+ characters'
		}
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
		console.log(resJson);
		return {
			message: JSON.stringify(resJson)
		}
	} else {
		resJson = await res.json();
		console.log(resJson);
		redirect(`https://${process.env.DOMAIN_NAME}/account`);
	}

}
