import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Visit } from '@/app/types/visit';

export default async function(): Promise<Visit[]> {
	let sid = cookies().get('connect.sid');
	if (!sid) redirect(`https://${process.env.DOMAIN_NAME}/signin`);

	let req = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/participants`, {
		headers: {
			cookie: `${sid.name}=${sid.value}`
		}
	});

	if (!req.ok) {
		console.log(`could not fetch participants for the user: `, await req.json());
		redirect('/signin');
	} else {
		return req.json();
	}

}
