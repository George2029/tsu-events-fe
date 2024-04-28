import EventPreviewCard from './ui/events/EventPreviewCard';
import { plainToClass } from 'class-transformer';
import { Event } from './classes/events/event';
import { EventJSON } from './types/events/eventTypes';
import Genre from './ui/Genre';

async function getAllEvents() {
	const res = await fetch('http://localhost:3000/events', { cache: 'no-store' });

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	let eventsJSON = await res.json();
	let events = eventsJSON.map((eventJSON: EventJSON) => plainToClass(Event, eventJSON));
	return events;
}

let data = {
	title: 'all types',
	options: [
		{
			title: 'movies',
			href: '/movies',
		},
		{
			title: 'board games',
			href: '/boardgames',
		},
		{
			title: 'contests',
			href: '/contests',
		},
		{
			title: 'custom',
			href: '/custom',
		},
	]
}

export default async function Home() {

	const events = await getAllEvents();
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...data} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				{events.map((event: Event) =>
					<div className="mt-6" key={event.id}>
						<EventPreviewCard {...event} />
					</div>
				)}
			</div>
		</div>
	);
}

