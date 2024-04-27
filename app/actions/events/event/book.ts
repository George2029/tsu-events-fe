'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function book(formData: FormData) {

	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin')

	let eventId = formData.get(`eventId`)
	let notified = !!Number(formData.get('notified'));

	let res = await fetch('http://localhost:3000/participants', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `${sid.name}=${sid.value}`
		},
		body: JSON.stringify({ eventId, notified })
	});

	if (!res.ok) {
		let json = await res.json();
		console.log(json);
		return;
	}
	let json = await res.json();
	console.log(`new Participant has been created:`, json);
	redirect(`/${eventId}`);

}
