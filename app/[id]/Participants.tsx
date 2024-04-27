import dynamic from 'next/dynamic'
import Link from 'next/link'

import { UserGroup } from '@/app/ui/icons';

const NumberOfParticipants = dynamic(() => import('./NumberOfParticipants'), {
	loading: () => <div className="w-6 h-6 rounded-lg animate-pulse bg-neutral-800"></div>
})

const Book = dynamic(() => import('./Book'), {
	loading: () => <div className="w-10 h-7 rounded-lg animate-pulse bg-neutral-800"></div>
})

export default function Participants({ props }: { props: { placesTotal: number, eventId: number } }) {
	let { placesTotal, eventId } = props;

	return (
		<div className="p-2 rounded-lg flex flex-col gap-4">
			<div className=" flex gap-2 justify-between">
				<div className="flex gap-4">
					<div>
						<div className="text-sm font-semibold">Participants</div>
						<div className="mt-2">
							Places: {placesTotal}
						</div>
					</div>
					<div className="flex gap-2">
						<div className="self-center">
							<NumberOfParticipants props={{ eventId }} />
						</div>
						<Link href={`/${eventId}/participants`} className="text-specialIcons dark:text-darkspecialIcons cursor-pointer self-center">{UserGroup}</Link>
					</div>
				</div>
				<Book props={{ eventId }} />
			</div>
		</div>
	)
}
