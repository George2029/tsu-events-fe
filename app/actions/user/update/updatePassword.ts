'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updatePassword(prevState: any, formData: FormData) {

	let sid = cookies().get('connect.sid');

	if (!sid) redirect('/signin');

	let oldPassword = formData.get('oldPassword')?.toString().trim();
	let newPassword = formData.get('newPassword')?.toString().trim();

	if (!oldPassword || !newPassword) {
		return {
			message: 'passwords should not be empty'
		}
	}

	let strengthCheckRegex = /^(?=.*[A-Z])(?=.*[!@#\-$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

	if (!newPassword.match(strengthCheckRegex)) {
		return {
			message: 'password should contain at least 1 special symbol, 1 capital latin letter, 1 digit, 1 lowercase latin letter, and be at least 8 characters'
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
		return redirect('/account');
	}

}
