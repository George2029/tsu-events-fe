'use server'

import { cookies } from 'next/headers'
import setCookie from 'set-cookie-parser';
import { redirect } from 'next/navigation';

export default async function signUp(prevState: any, formData: FormData) {

	const rawFormData = {
		email: formData.get('email'),
		username: formData.get('username'),
		password: formData.get('password'),
		password2: formData.get('password2'),
	}

	let email = rawFormData.email?.toString().trim();
	let username = rawFormData.username?.toString().trim();
	let password = rawFormData.password?.toString().trim();
	let password2 = rawFormData.password2?.toString().trim();

	if (!email || !username || !password || !password2) return {
		message: 'fields should not be empty'
	}

	if (email.length < 6 || email.length > 40) {
		return {
			message: 'email should not be less than 6 characters or greater than 40 characters'
		}
	}

	let regexForTheFirstSymbol = /^[A-Za-z]/

	if (!username.match(regexForTheFirstSymbol)) {
		return {
			message: 'username should start with a latin letter'
		}
	}

	let regexForValidSymbols = /[^A-Za-z0-9_]/;

	if (username.match(regexForValidSymbols)) {
		return {
			message: 'username can contain just latin letters and numbers'
		}
	}

	if (username.length < 6 || username.length > 30) {
		return {
			message: 'username should not be less than 6 characters and not greater than 30 characters'
		}
	}

	if (password !== password2) {
		return {
			message: 'passwords should be equal'
		}
	}

	let strengthCheckRegex = /^(?=.*[A-Z])(?=.*[!@#\-$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

	if (!password.match(strengthCheckRegex)) {
		return {
			message: 'password should contain at least 1 special symbol, 1 capital latin letter, 1 digit, 1 lowercase latin letter and be at least 8 chars'
		}
	}

	let response: any;

	let myHeaders = new Headers([["Content-Type", "application/json"]]);

	try {
		response = await fetch('http://localhost:3000/users', {
			method: 'POST',
			body: JSON.stringify({
				email,
				username,
				password
			}),
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
		console.log(`unsuccessfull attemnt to sign-up: ${username}, ${email}`)
		return {
			message: 'something went wrong'
		}
	} else {
		console.log(`username ${username} successfully signed up!`);
		return redirect('/account');
	}


}
