import dynamic from 'next/dynamic';
import Genre from '@/app/ui/Genre';
import { genresBarConfig } from './genresBarConfig';
import EventsLoadingSkeleton from '@/app/EventsLoadingSkeleton';

const Events = dynamic(() => import('./Events'), {
	loading: () => <EventsLoadingSkeleton />
});


export default async function Home() {


	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...genresBarConfig} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				<Events />
			</div>
		</div>
	);
}

