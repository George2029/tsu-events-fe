import dynamic from 'next/dynamic';
import Genre from '@/app/ui/Genre';
import EventsLoadingSkeleton from '@/app/EventsLoadingSkeleton'

const BoardGames = dynamic(() => import('./BoardGames'), {
	loading: () => <EventsLoadingSkeleton />
});


import { genresBarConfig } from './genresBarConfig';


export default async function MovieEventsPage() {
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...genresBarConfig} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				<BoardGames />
			</div>
		</div>
	);
}
