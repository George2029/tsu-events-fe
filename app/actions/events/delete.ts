'use server'


import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function deleteEvent(id: number) {
	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');
	let res = await fetch(`http://localhost:3000/mod/events/${id}`,
		{
			method: 'DELETE',
			headers: {
				Cookie: `${sid.name}=${sid.value}`
			}
		});
	console.log(res);
	if (!res.ok) redirect('/signin');
	redirect('/');
}
