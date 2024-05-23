'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function updateBook(formData: FormData) {

	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin')

	let eventId = formData.get(`eventId`);
	let notified = !!Number(formData.get('notified'));
	let status = formData.get('status');
	let id = formData.get('id');

	let obj = status ? { notified, status } : { notified };

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/participants/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `${sid.name}=${sid.value}`
		},
		body: JSON.stringify(obj)
	});

	if (!res.ok) {
		let json = await res.json();
		console.log(json);
		return;
	}
	let json = await res.json();
	console.log(`participant ${id} updated:`, json);
	redirect(`/${eventId}`);

}
