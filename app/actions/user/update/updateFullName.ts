'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updateFullName(prevState: any, formData: FormData) {

	let sid = cookies().get('connect.sid');

	if (!sid) redirect('/signin');

	let fullName = formData.get('fullName')?.toString().trim();

	if (!fullName) {
		return {
			message: 'fullName should not be empty'
		}
	}

	let onlyLatinLettersRegex = /[^A-Za-z]/;

	if (!fullName.match(onlyLatinLettersRegex)) {
		return {
			message: 'fullName should contain only latin letters'
		}
	}

	if (fullName.length < 6 || fullName.length > 50) {
		return {
			message: 'fullName should not be less than 6 characters or greater than 50 characters'
		}
	}

	let res: any;

	try {
		res = await fetch('http://localhost:3000/user/fullName',
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({
					fullName: fullName
				})
			})
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

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
