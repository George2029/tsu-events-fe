import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function(eventId: number, type: EventType): Promise<any> {
	let count = await fetch(`http://localhost:3000/configs/count/${eventId}/${type}`, {
		cache: 'no-store'
	});
	return count.json();
}  
