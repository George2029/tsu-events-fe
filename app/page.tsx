import GenresBar from './ui/GenresBar';
import EventPreviewCard from './ui/events/EventPreviewCard';
import { plainToClass } from 'class-transformer';
import { Event } from './classes/event';
import { EventJSON } from './types/events/eventTypes';

async function getAllEvents() {
	const res = await fetch('http://localhost:3000/events', { cache: 'no-store' });

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	let eventsJSON = await res.json();
	let events = eventsJSON.map((eventJSON: EventJSON) => plainToClass(Event, eventJSON));
	return events;
}

export default async function Home() {

	const events = await getAllEvents();
	return (
		<>
			<GenresBar />
			<div className="mt-10 w-full">
				{events.map((event: Event) =>
					<div className="mt-6" key={event.id}>
						<EventPreviewCard {...event} />
					</div>
				)}
			</div>
		</>
	);
}
