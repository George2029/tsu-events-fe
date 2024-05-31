'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default async function() {
	let sid = cookies().get('connect.sid');
	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user`, {
		method: 'DELETE',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});

	if (!res.ok) {
		console.log(`FAILED TO DELETE ACCOUNT: `, await res.json());
	} else {
		cookies().delete('connect.sid');
	}

	redirect(`https://${process.env.DOMAIN_NAME}`);
}
