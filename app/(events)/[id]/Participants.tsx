import dynamic from 'next/dynamic'
import { EventStatus } from '@/app/classes/events/enums/eventStatus.enum';
import Link from 'next/link'

import { UserGroupFilled } from '@/app/ui/icons/fillIcons';

const NumberOfParticipants = dynamic(() => import('./NumberOfParticipants'), {
	loading: () => <div className="w-6 h-6 rounded-lg animate-pulse bg-sky-200 dark:bg-neutral-800"></div>

})

const Book = dynamic(() => import('./Book'), {
	loading: () => <div className="h-[3.25rem] w-32 bg-loading dark:bg-darkloading rounded-md"></div>
})

export default function Participants({ props }: { props: { placesTotal: number, eventId: number, status: EventStatus } }) {
	let { placesTotal, eventId, status } = props;
	console.log(status);

	return (
		<div className="flex flex-col gap-4">
			<div className=" flex gap-2 justify-between">
				<div className="flex gap-4">
					<div>
						<div className="text-sm font-semibold">Participants</div>
						<div className="mt-2 flex items-center w-24 gap-1">
							<span className="text-sm font-semibold">Places:</span>
							<span>{placesTotal}</span>
						</div>
					</div>
					<div className="flex gap-2">
						<Link href={`/${eventId}/participants`} className="hover:text-active dark:hover:text-darkactive md:active:scale-90 active:scale-50 duration-300 text-specialIcons dark:text-darkspecialIcons cursor-pointer self-center">{UserGroupFilled}</Link>
						<div className="self-center">
							<NumberOfParticipants props={{ eventId }} />
						</div>
					</div>
				</div>
				{(status === EventStatus.NOTPASSED) &&
					(
						<Book props={{ eventId }} />
					)
				}
			</div>
		</div>
	)
}
