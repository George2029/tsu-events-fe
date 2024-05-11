import Genre from '@/app/ui/Genre';
import dynamic from 'next/dynamic';
import { getRequests } from '@/app/actions/requests/getRequests';
import { genresBarConfig } from './genresBarConfig';

import EventsLoadingSkeleton from '@/app/EventsLoadingSkeleton';

const Requests = dynamic(() => import('./Requests'), {
	loading: () => <EventsLoadingSkeleton />
});

export default async function RequestsPage() {
	let requests = await getRequests();

	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...genresBarConfig} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				<Requests />
			</div>
		</div>
	)
}
