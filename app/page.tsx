import EventPreviewCard from './ui/events/EventPreviewCard';
import Genre from './ui/Genre';
import getAllEvents from './getAllEvents';
import { genresBarConfig } from './genresBarConfig';

export default async function Home() {

	const events = await getAllEvents();

	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...genresBarConfig} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				{events.map((event) => <EventPreviewCard key={event.id} {...event} />)}
			</div>
		</div>
	);
}

