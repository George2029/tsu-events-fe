import dynamic from 'next/dynamic';
import Genre from '@/app/ui/Genre';
import EventsLoadingSkeleton from '@/app/EventsLoadingSkeleton';

const Contests = dynamic(() => import('./Contests'), {
	loading: () => <EventsLoadingSkeleton />
});


import { genresBarConfig } from './genresBarConfig';


export default async function ContestsEventsPage() {
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...genresBarConfig} />
			</div>
			<div className="mt-20 md:mt-0 grow p-5">
				<Contests />
			</div>
		</div>
	);
}
