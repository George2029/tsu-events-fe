'use server'

import { cookies } from 'next/headers'
import setCookie from 'set-cookie-parser';
import { CreateUserDto } from '@/app/classes/users/dto/create-user.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { redirect } from 'next/navigation';

export default async function signUp(prevState: any, formData: FormData) {

	const rawFormData = {
		email: formData.get('email'),
		username: formData.get('username'),
		firstName: formData.get('firstName'),
		password: formData.get('password'),
		password2: formData.get('password2'),
	}

	let email = rawFormData.email?.toString().trim();
	let username = rawFormData.username?.toString().trim();
	let password = rawFormData.password?.toString().trim();
	let firstName = rawFormData.firstName?.toString().trim();
	let password2 = rawFormData.password2?.toString().trim();

	if (password !== password2) {
		return {
			message: 'passwords should be equal'
		}
	}

	//validation
	let createUserDto = plainToInstance(CreateUserDto, { email, username, firstName, password });
	let valid = await validate(createUserDto);
	if (valid.length) return ({ message: JSON.stringify(valid) });

	let response: any;
	let myHeaders = new Headers([["Content-Type", "application/json"]]);

	try {
		response = await fetch('http://localhost:3000/users', {
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
		console.log(response.status);
		let res = await response.json();
		console.log(res);
		console.log(`unsuccessfull attemnt to sign-up: ${username}, ${email}`)
		return {
			message: 'something went wrong'
		}
	} else {
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
		console.log(`username ${username} successfully signed up!`);
		return redirect('/account');
	}


}
