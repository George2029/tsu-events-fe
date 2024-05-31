'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

type User = {
	email: string,
	username: string,
	password: string,
	firstName: string
}

export default async function signUp(user: User): Promise<boolean> {

	let myHeaders = new Headers([["Content-Type", "application/json"]]);

	let response = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: myHeaders
	})

	if (!response.ok) {
		let res = await response.json();
		console.log(`SIGNUP FAILED: `, res);
		return false;
	} else {

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

		redirect(`https://${process.env.DOMAIN_NAME}/account`);
	}


}
