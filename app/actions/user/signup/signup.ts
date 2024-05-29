'use server'

import { cookies } from 'next/headers'
import { CreateUserDto } from '@/app/classes/users/dto/create-user.dto';
import { redirect } from 'next/navigation';

export default async function signUp(createUserDto: CreateUserDto) {

	let response: any;
	let myHeaders = new Headers([["Content-Type", "application/json"]]);

	try {
		response = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users`, {
			method: 'POST',
			body: JSON.stringify(createUserDto),
			headers: myHeaders
		})
	} catch (err) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}
	}

	if (!response.ok) {
		let res = await response.json();
		console.log(res);
		return redirect(`https://${process.env.DOMAIN_NAME}/account`);
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

		console.log(`username ${createUserDto.username} successfully signed up!`);
		return redirect(`https://${process.env.DOMAIN_NAME}/account`);
	}


}
