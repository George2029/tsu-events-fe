import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function getAllConfigs(eventId: number, type: EventType) {
	let res = await fetch(`http://localhost:3000/configs/${eventId}/${type}`, {
		cache: 'no-store'
	});

	if (!res.ok) {
		let json = await res.json();
		console.log(json);
		return;
	}

	return res.json();
}
