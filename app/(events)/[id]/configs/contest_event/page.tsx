import { notFound } from 'next/navigation'
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getAllConfigsByEventType from '@/app/actions/configs/getAllConfigsByEventType';
import BackButton from '@/app/ui/buttons/Back';

export default async function ContestEventConfigsPage({ params }: { params: { id: string } }) {
	let eventId = +params.id;
	if (isNaN(eventId)) notFound();
	let configs = await getAllConfigsByEventType(eventId, EventType.CONTEST_EVENT);
	console.log(configs);
	return (
		<>
			<div className="p-3 ring-1 ring-border dark:ring-darkborder bg-cardBG dark:bg-darkcardBG rounded-lg">
				<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
					<div className="text-center grow overflow-scroll">Information about contest(s) of the event</div>
				</div>
				<div className="space-y-4 mt-4">
					{
					}
				</div>
			</div>
			<BackButton />
		</>
	)
}
