'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updateUsername(prevState: any, formData: FormData) {

	let sid = cookies().get('connect.sid');

	if (!sid) redirect('/signin');

	let username = formData.get('username');

	if (!username) {
		return {
			message: 'username should not be empty'
		}
	}

	let stringifiedUsername = username.toString().trim();

	if (stringifiedUsername === '') {
		return {
			message: 'username should not be empty'
		}
	}

	let regexForTheFirstSymbol = /^[A-Za-z]/

	if (!stringifiedUsername.match(regexForTheFirstSymbol)) {
		return {
			message: 'username should start with a latin letter'
		}
	}

	let regexForValidSymbols = /[^A-Za-z0-9_]/;

	if (stringifiedUsername.match(regexForValidSymbols)) {
		return {
			message: 'username should not contain any invalid characters'
		}
	}

	if (stringifiedUsername.length < 6 || stringifiedUsername.length > 30) {
		return {
			message: 'username should not be less than 6 characters and not greater than 30 characters'
		}
	}



	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/username`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({
					username: stringifiedUsername
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
