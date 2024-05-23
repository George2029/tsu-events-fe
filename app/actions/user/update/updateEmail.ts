'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updateEmail(prevState: any, formData: FormData) {

	let sid = cookies().get('connect.sid');

	if (!sid) redirect('/signin');

	let email = formData.get('email');

	if (!email) {
		return {
			message: 'email should not be empty'
		}
	}

	let stringifiedEmail = email.toString().trim();

	if (stringifiedEmail.length < 6 || stringifiedEmail.length > 40) {
		return {
			message: 'email should not be less than 6 characters or greater than 14 characters'
		}
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/email`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({
					email: stringifiedEmail
				})
			})
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	console.log(res);

	if (!res.ok) {
		let resJson = await res.json();
		console.log(resJson);
		return {
			message: JSON.stringify(resJson)
		}
	} else {
		let resJson = await res.json();
		console.log(resJson);
		return redirect('/account');
	}

}
