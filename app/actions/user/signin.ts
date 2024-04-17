'use server'

import { cookies } from 'next/headers'
import setCookie from 'set-cookie-parser';
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


	let responseCookies = setCookie.parse(response);

	responseCookies.forEach(cookie => {
		cookies().set({
			name: cookie.name,
			value: cookie.value,
			httpOnly: cookie.httpOnly,
			path: cookie.path,
			maxAge: cookie.maxAge,
			secure: cookie.secure
		});
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
