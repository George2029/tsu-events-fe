import { notFound } from 'next/navigation'
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getAllConfigsByEventType from '@/app/actions/configs/getAllConfigsByEventType';
import Link from 'next/link';
import { GoBackIcon } from '@/app/ui/icons';

export default async function MovieEventConfigsPage({ params }: { params: { id: string } }) {
	let eventId = +params.id;
	if (isNaN(eventId)) notFound();
	let configs = await getAllConfigsByEventType(eventId, EventType.MOVIE_EVENT);
	console.log(configs);
	return (
		<>
			<div className="p-3 ring-1 ring-border dark:ring-darkborder bg-cardBG dark:bg-darkcardBG rounded-lg">
				<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
					<div className="text-center grow overflow-scroll">Information about movie(s) of the event</div>
				</div>
				<div className="space-y-4 mt-4">
				</div>
			</div>
			<Link href={`/${eventId}`} className="md:active:scale-90 w-fit active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder mt-4 flex p-2 gap-2 rounded-lg"><span>Back</span> {GoBackIcon}</Link>
		</>
	)
}
