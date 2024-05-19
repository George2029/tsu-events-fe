import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';

export default async function({ params }: { params: { id: string, userId: string, eventId: string } }) {

	const { id, eventId, userId } = params;
	console.log(id, eventId, userId);

	if (!id || isNaN(+id) || !eventId || isNaN(+eventId) || !userId || isNaN(+userId)) {
		console.log(`participant #ispresent update has failed: the provided link is misconstructed: participantId: ${id}, eventId: ${eventId}, userId: ${userId}`);
		notFound();
	}

	let sid = cookies().get('connect.sid');
	console.log(sid);
	if (!sid) redirect('/signin');

	let req = await fetch('http://localhost:3000/mod/participants/' + id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `${sid.name}=${sid.value}`
		},
		body: JSON.stringify({ status: 'ISPRESENT' })
	})

	if (!req.ok) {
		console.log(`unsuccessful participantUpdate: `, await req.json());
		if (req.status === 404) notFound();
		redirect('/signin');
	}

	console.log(`userId ${userId} is a present participant of event ${eventId}!`);

	// let it be async (if it is the first time a user has been present at an event, they will become the experienced)

	fetch(`http://localhost:3000/mod/users/${userId}/incrementVisits`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `${sid.name}=${sid.value}`
		}
	});

	redirect(`/${eventId}/participants`);

}
