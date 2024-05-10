import { plainToInstance } from 'class-transformer';
import { EventPreview } from '@/app/classes/events/event';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function getAllEvents(eventType?: EventType): Promise<EventPreview[]> {
	const res = await fetch(`http://localhost:3000/events/${eventType ? eventType : ''}`, { cache: 'no-store' });
	let eventsJSON = await res.json();
	console.log(eventsJSON);
	return eventsJSON.map((eventJSON: any) => plainToInstance(EventPreview, eventJSON));
}
