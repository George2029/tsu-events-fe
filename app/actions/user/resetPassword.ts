'use server'

import { redirect } from 'next/navigation';

type PrevState = {
	message: string
}

export default async function resetPassword(prevState: PrevState, formData: FormData) {

	let id = formData.get('id');

	if (!id?.toString().trim()) throw new Error;

	let password = formData.get('password')?.toString().trim();
	let password2 = formData.get('password2')?.toString().trim();

	if (!password || !password2) {
		return {
			message: 'passwords should not be empty'
		}
	}

	if (password !== password2) {
		return {
			message: 'passwords should be equal'
		}
	}


	if (password.length < 12) {
		return {
			message: 'password should contain at least 12 symbols'
		}
	}

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/resetpw`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id,
				password: password
			})
		})

	let resJson: any;

	if (!res.ok) {
		resJson = await res.json();
		console.log(`FATAL RESET PASSWORD: `, resJson);
		return {
			status: false,
			message: JSON.stringify(resJson)
		}
	} else {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

}
