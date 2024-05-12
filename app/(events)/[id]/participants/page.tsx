import { notFound } from 'next/navigation'
import { DateTime } from "luxon";
import { LockMicro } from '@/app/ui/microIcons';
import { GoBackIcon } from '@/app/ui/icons';
import Link from 'next/link';
import getAllParticipants from '@/app/actions/events/event/getAllParticipants';

let title = 'Participants of the event';

type ParticipantUser = {
	username: string,
	firstName: string,
	hue: number,
}

function ParticipantCard({ props }: { props: { id: number, userId: number, serialNumber: number, createdAt: string, user: ParticipantUser } }) {
	let { id, userId, serialNumber, createdAt, user } = props;
	let dt = DateTime.fromJSDate(new Date(createdAt));
	let time = dt.toLocaleString({
		day: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: '2-digit'
	})
	let { username, firstName, hue } = user;
	let letter = firstName[0];
	return (
		<div className="p-2  rounded-lg">
			<div className="flex justify-between">
				<div className="item-center text-sm font-semibold flex gap-2">
					<div>{serialNumber}.</div>
					<Link href={`/user/${userId}`} className={`self-center block hover:text-active dark:hover:text-darkactive active:scale-90 duration-300 rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-4 h-4 font-bold flex justify-center items-center`}>
						<span className="text-white text-xs drop-shadow-md">
							{letter}
						</span>
					</Link>
					<div>@{username}</div>
				</div>
				<div className="items-center flex gap-1">
					<div className="font-light italic text-xs">{time}</div>
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
		<div className="px-5 max-w-xl w-full mt-20 flex flex-col">
			<div className="rounded-lg dark:bg-darkcardBG bg-cardBG ring-1 ring-border dark:ring-darkborder">
				<div className="p-3">
					<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
						<div className="text-center grow overflow-scroll">{title}</div>
					</div>
					<div className="space-y-4 mt-4">
						{
							participants.map(
								({ id, createdAt, userId, user }: { id: number, userId: number, createdAt: string, user: ParticipantUser }, index: number) =>
									<ParticipantCard key={id} props={{ id, serialNumber: index + 1, createdAt, user, userId }} />)
						}
					</div>
				</div>
			</div>
			<Link href={`/${eventId}`} className="self-end md:active:scale-90 active:scale-50 duration-300 bg-button dark:hover:text-darkactive dark:bg-darkcardBG ring-1 ring-border dark:ring-darkborder mt-4 flex p-2 gap-2 rounded-lg"><span>Back</span> {GoBackIcon}</Link>
		</div>
	)
}
