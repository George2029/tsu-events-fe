'use server'

import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { redirect } from 'next/navigation';

export default async function deleteRequest(id: number, type: EventType) {
	let sid = cookies().get('connect.sid');
	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/experienced/requests/${id}`,
		{
			method: 'DELETE',
			headers: {
				Cookie: `${sid.name}=${sid.value}`
			}
		});
	if (res.ok) {
		console.log(`request`, id, `has been successfully deleted`);
		revalidateTag('requests');
		revalidateTag(`request` + id);
		revalidateTag('requests' + type);
		redirect('/requests');

	} else {
		console.log(`FAILED: request `, id, `was not deleted`);
		let response = await res.json();
		console.log(response);
		redirect('/signin');
	}


}
