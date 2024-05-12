import { notFound } from 'next/navigation'
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import Link from 'next/link';
import { GoBackIcon } from '@/app/ui/icons';
import getAllConfigsByEventType from '@/app/actions/configs/getAllConfigsByEventType';

export default async function BoardGamesEventConfigsPage({ params }: { params: { id: string } }) {
	let eventId = +params.id;
	if (isNaN(eventId)) notFound();
	let configs = await getAllConfigsByEventType(eventId, EventType.BOARD_GAMES_EVENT);
	console.log(configs);
	return (
		<>
			<div className="p-3 ring-1 ring-border dark:ring-darkborder bg-cardBG dark:bg-darkcardBG rounded-lg">
				<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
					<div className="text-center grow overflow-scroll">Information about boardgame(s) of the event</div>
				</div>
				<div className="space-y-4 mt-4">
					{
					}
				</div>
			</div>
			<Link href={`/${eventId}`} className="w-fit md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder mt-4 flex p-2 gap-2 rounded-lg"><span>Back</span> {GoBackIcon}</Link>
		</>
	)
}
