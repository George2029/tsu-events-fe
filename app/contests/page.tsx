import Genre from '@/app/ui/Genre';
import EventPreviewCard from '@/app/ui/events/EventPreviewCard';
import getAllContests from './getAllContestEvents';

let data = {
	title: 'contests',
	options: [
		{
			title: 'board games',
			href: '/boardgames',
		},
		{
			title: 'movies',
			href: '/movies',
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


export default async function BoardGameEventsPage() {
	let events = await getAllContests();
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...data} />
			</div>
			<div className="mt-20 md:mt-0 grow m-5">
				{events.map((event) => <EventPreviewCard key={event.id} {...event} />)}
			</div>
		</div>
	);
}
