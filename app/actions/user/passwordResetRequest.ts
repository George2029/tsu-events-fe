'use server'

import { redirect } from 'next/navigation';

export default async function passwordResetRequest(prevState: any, formData: FormData) {

	let username = formData.get('username');

	if (!username) {
		return {
			message: 'username should not be empty'
		}
	}

	let trimmedUsername = username.toString().trim();

	if (!trimmedUsername) {
		return {
			message: 'username should not be empty'
		}
	}

	if (trimmedUsername.length > 15 || trimmedUsername.length < 6) {
		return {
			message: `please, don't bruteforce`
		}
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/resetPasswordRequest`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: trimmedUsername,
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
		return {
			email: resJson.email,
			message: ''
		};
	}

}
