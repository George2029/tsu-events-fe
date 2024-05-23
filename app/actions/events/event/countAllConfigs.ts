import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function(eventId: number, type: EventType): Promise<any> {
	let count = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/configs/count/${eventId}/${type}`, {
		cache: 'no-store'
	});
	return count.json();
}  
