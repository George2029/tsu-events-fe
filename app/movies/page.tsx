import Genre from '@/app/ui/Genre';
import getAllEvents from './getAllMovieEvents';
import EventPreviewCard from '@/app/ui/events/EventPreviewCard';

let data = {
	title: 'movies',
	options: [
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
		{
			title: 'all events',
			href: '/',
		},
	]
}


export default async function MovieEventsPage() {
	const events = await getAllEvents();
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...data} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				{events.map((event) => <EventPreviewCard key={event.id} {...event} />)}
			</div>
		</div>
	);
}
