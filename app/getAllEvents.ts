import { plainToInstance } from 'class-transformer';
import { EventPreview } from './classes/events/event';

export default async function getAllEvents(): Promise<EventPreview[]> {
	const res = await fetch('http://localhost:3000/events', { cache: 'no-store' });
	let eventsJSON = await res.json();
	return eventsJSON.map((eventJSON: any) => plainToInstance(EventPreview, eventJSON));
}
