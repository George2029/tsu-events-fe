'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type PrevState = {
	message: string
}

export default async function updateFirstName(prevState: PrevState, formData: FormData): Promise<PrevState> {

	let sid = cookies().get('connect.sid');

	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let firstName = formData.get('firstName')?.toString().trim();

	if (!firstName) {
		return {
			message: 'First name should not be empty'
		}
	}

	let onlyLatinLettersRegex = /^[A-Za-z][A-Za-z\s]{0,50}$/;

	if (!firstName.match(onlyLatinLettersRegex)) {
		return {
			message: 'Latin letters only, no more than 50'
		}
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/firstName`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${sid.name}=${sid.value}`
				},
				body: JSON.stringify({
					firstName: firstName
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
		redirect(`https://${process.env.DOMAIN_NAME}/account`);
	}

}
