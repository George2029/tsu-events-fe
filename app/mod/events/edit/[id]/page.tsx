import { notFound } from 'next/navigation'
import { plainToInstance } from 'class-transformer';
import { Event } from '@/app/classes/events/event';
import type { EventJSON } from '@/app/types/events/eventTypes';
import EditEvent from '@/app/ui/moderation/EditEvent';

export default async function ModEventPage({ params }: { params: { id: string } }) {

	if (isNaN(+params.id)) notFound();

	let res = await fetch(`http://localhost:3000/events/${params.id}`, { cache: 'no-store' });

	if (!res.ok) notFound()

	let eventJSON: EventJSON = await res.json();
	let event = plainToInstance(Event, eventJSON);
	let {
		id,
		type,
		title,
		location,
		placesTotal,
		status,
		startTime,
		endTime,
		description,
	} = event;
	startTime = new Date(startTime);
	endTime = new Date(endTime);
	console.log(event);

	startTime.setMinutes(startTime.getMinutes() - startTime.getTimezoneOffset());
	let normalizedStartTime = startTime.toISOString().slice(0, 16);

	endTime.setMinutes(endTime.getMinutes() - endTime.getTimezoneOffset());
	let normalizedEndTime = endTime.toISOString().slice(0, 16);

	return <EditEvent props={{
		id,
		existingType: type,
		existingTitle: title,
		existingLocation: location,
		existingPlacesTotal: placesTotal,
		existingStatus: status,
		existingStartTime: normalizedStartTime,
		existingEndTime: normalizedEndTime,
		existingDescription: description,

	}}
	/>
}
