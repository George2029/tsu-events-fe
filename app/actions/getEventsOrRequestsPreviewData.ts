import { plainToInstance } from 'class-transformer';
import { EventOrRequestPreview } from '@/app/classes/EventOrRequestPreview';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function getAllEventsOrRequestsPreviewData(options?: { requests?: boolean, eventType?: EventType }): Promise<EventOrRequestPreview[]> {
	let dataType = options?.requests ? 'requests' : 'events';
	let eventType = options?.eventType;
	let url = `http://localhost:3000/${dataType}`;
	if (eventType) {
		url = url + '?' + new URLSearchParams({ type: eventType })
	}
	const res = await fetch(url, {
		cache: 'no-store'
	});
	let eventsJSON = await res.json();
	return eventsJSON.map((eventJSON: any) => plainToInstance(EventOrRequestPreview, eventJSON));
}
