'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export async function signIn(prevState: any, formData: FormData) {

	const rawFormData = {
		username: formData.get('username'),
		password: formData.get('password'),
	}

	let response: any;

	let myHeaders = new Headers([["Content-Type", "application/json"]]);

	try {
		response = await fetch('http://localhost:3000/auth/login', {
			method: 'POST',
			body: JSON.stringify(rawFormData),
			headers: myHeaders
		})
	} catch (err) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}
	}

	// super basic custom parser

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
		secure: false,
	});

	if (!response.ok) {
		console.log(`${rawFormData.username} unsuccessfully attempted to log-in`)
		return {
			message: 'username or password is wrong'
		}
	} else {
		console.log(`username ${rawFormData.username} successfully logged in`);
		return redirect('/account');
	}


}
