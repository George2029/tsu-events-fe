import { notFound } from 'next/navigation'
import { DateTime } from "luxon";
import { LockMicro } from '@/app/ui/microIcons';
import { GoBackIcon } from '@/app/ui/icons';
import Link from 'next/link';
//import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';
import getAllParticipants from '@/app/actions/events/event/getAllParticipants';

let title = 'Participants of the event';

type ParticipantUser = {
	username: string,
	fullName?: string,
}

function ParticipantCard({ props }: { props: { id: number, serialNumber: number, createdAt: string, user: ParticipantUser } }) {
	let { id, serialNumber, createdAt, user } = props;
	let dt = DateTime.fromJSDate(new Date(createdAt));
	let time = dt.toLocaleString({
		day: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: '2-digit'
	})
	let { username, fullName } = user;
	return (
		<div className="p-2  rounded-lg">
			<div className="flex justify-between">
				<div className="text-sm font-semibold">{serialNumber}. {fullName === null ? username : `${fullName} aka ${username}`}</div>
				<div className="flex gap-1">
					<div className="italic text-sm">{time}</div>
					<div>{LockMicro}</div>
				</div>
			</div>
		</div>
	)
}

export default async function EventParticipantsPage({ params }: { params: { id: string } }) {
	let eventId = +params.id;
	if (isNaN(eventId)) notFound();
	let participants = await getAllParticipants(eventId);
	console.log(participants);
	return (
		<>
			<div className="rounded-lg mt-20 px-6 max-w-xl w-full dark:bg-darkcardBG bg-cardBG ring-1 ring-border dark:ring-darkborder">
				<div className="p-3">
					<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
						<div className="text-center grow overflow-scroll">{title}</div>
					</div>
					<div className="space-y-4 mt-4">
						{
							participants.map(
								({ id, createdAt, user }: { id: number, createdAt: string, user: ParticipantUser }, index: number) =>
									<ParticipantCard key={id} props={{ id, serialNumber: index + 1, createdAt, user }} />)
						}
					</div>
				</div>
			</div>
			<Link href={`/${eventId}`} className="bg-button dark:hover:text-darkactive dark:bg-darkcardBG ring-1 ring-border dark:ring-darkborder mt-4 flex p-2 gap-2 rounded-lg"><span>Back</span> {GoBackIcon}</Link>
		</>
	)
}
