'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

type PrevState = {
	message: string,
}

export async function signIn(prevState: PrevState, formData: FormData): Promise<PrevState> {

	const rawFormData = {
		email: formData.get('email'),
		password: formData.get('password'),
	}

	let response: any;
	console.log(rawFormData);

	let myHeaders = new Headers([["Content-Type", "application/json"]]);

	try {
		response = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/auth/login`, {
			method: 'POST',
			body: JSON.stringify(rawFormData),
			headers: myHeaders
		})
	} catch (err) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}
	}

	if (!response.ok) {
		console.log(`${rawFormData.email} unsuccessfully attempted to log-in`, await response.json())
		return {
			message: 'email or password is wrong'
		}
	} else {
		console.log(`email ${rawFormData.email} successfully logged in`);
		let cookie = String(response.headers.get('set-cookie')).split('; ');
		let sessionId = cookie[0].split('=')[1];
		let expires = cookie[2].split('=')[1];
		console.log(sessionId, expires);

		cookies().set({
			name: 'connect.sid',
			value: sessionId,
			httpOnly: true,
			path: '/',
			expires: new Date(expires),
			secure: true,
		});
		return redirect(`https://${process.env.DOMAIN_NAME}/account`);
	}


}
