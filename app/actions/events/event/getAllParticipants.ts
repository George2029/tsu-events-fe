import type { ParticipantUser } from '@/app/types/participantUser';

export default async function getAllParticipants(eventId: number): Promise<ParticipantUser[]> {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/participants/event/${eventId}`, {
		cache: 'no-store',
	})
	if (!res.ok) {
		let json = await res.json();
		throw new Error('could not fetched participants: ', json);
	}

	return res.json();

}
