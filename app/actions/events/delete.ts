'use server'

import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { redirect } from 'next/navigation';

export default async function deleteEvent(id: number, type: EventType) {
	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');
	let res = await fetch(`http://localhost:3000/mod/events/${id}`,
		{
			method: 'DELETE',
			headers: {
				Cookie: `${sid.name}=${sid.value}`
			}
		});

	if (!res.ok) {
		console.log(`FAILED: to delete event `, id);
		let response = await res.json();
		redirect('/signin');
	} else {
		console.log(`event `, id, `has been successfully deleted`);
		revalidateTag('events');
		revalidateTag('events' + id);
		revalidateTag('events' + type);
		redirect('/');
	}
}
