import { cookies } from 'next/headers';

export default async function getParticipant(eventId: number) {
	let sid = cookies().get('connect.sid');
	if (!sid) return false;
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/participants/self/${eventId}`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	})
	if (!res.ok) {
		let json = await res.json();
		console.log(`getParticipant: `, json);
		return false;
	}

	return res.json();

}
