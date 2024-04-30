import { plainToInstance } from 'class-transformer';
import { EventPreview } from '@/app/classes/events/event';

export default async function getAllCustomEvents(): Promise<EventPreview[]> {
	let res = await fetch(`http://localhost:3000/events/custom`, {
		cache: 'no-store'
	});
	let eventsJSON = await res.json();
	return eventsJSON.map((eventJSON: any) => plainToInstance(EventPreview, eventJSON));
}
