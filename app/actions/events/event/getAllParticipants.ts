export default async function getAllParticipants(eventId: number) {
	let res = await fetch(`http://localhost:3000/participants/event/${eventId}`, {
		cache: 'no-store',
	})
	if (!res.ok) {
		let json = await res.json();
		console.log(json);
		return false;
	}

	return res.json();

}
