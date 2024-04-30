import Genre from '@/app/ui/Genre';
import getAllCustomEvents from './getAllCustomEvents';
import EventPreviewCard from '@/app/ui/events/EventPreviewCard';

let data = {
	title: 'custom',
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
			title: 'movies',
			href: '/movies',
		},
		{
			title: 'all events',
			href: '/',
		},
	]
}


export default async function CustomEventsPage() {
	let events = await getAllCustomEvents();
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...data} />
			</div>
			<div className="mt-20 md:mt-0 grow p-5">
				{events.map((event) => <EventPreviewCard key={event.id} {...event} />)}
			</div>
		</div>
	);
}
