import { notFound } from 'next/navigation'
import { DateTime } from "luxon";
import { LockMicro, CheckMicro, NoSymbolMicro } from '@/app/ui/icons/microIcons';
import Link from 'next/link';
import getAllParticipants from '@/app/actions/events/event/getAllParticipants';
import BackButton from '@/app/ui/buttons/Back';

let title = 'Participants of the event';

import type { ParticipantUser } from '@/app/types/participantUser';
import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';

function participantStatus(status: ParticipantStatus) {
	switch (status) {
		case (ParticipantStatus.ISGOING): {
			return <div className="text-green-500" > {LockMicro}</div>
		}
		case (ParticipantStatus.ISPRESENT): {
			return <div className="text-green-500" > {CheckMicro}</div>
		}
		case (ParticipantStatus.ISABSENT): {
			return <div className="text-red-500" > {NoSymbolMicro}</div>
		}
	}
}

function ParticipantCard({ props }: { props: { participantUser: ParticipantUser, serialNumber: number } }) {
	let { participantUser, serialNumber } = props;
	let { createdAt, user, status, userId } = participantUser;
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
				<Link href={`/user/${userId}`} className="item-center text-sm font-semibold flex gap-2">
					<div>{serialNumber}.</div>
					<div className={`self-center block hover:text-active dark:hover:text-darkactive active:scale-90 duration-300 rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-4 h-4 font-bold flex justify-center items-center`}>
						<span className="text-white text-xs drop-shadow-md">
							{letter}
						</span>
					</div>
					<div className="hover:text-active dark:hover:text-darkactive">@{username}</div>
				</Link>
				<div className="items-center flex gap-1">
					<div className="font-light italic text-xs">{time}</div>
					{participantStatus(status)}
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
						<Link href={`/${eventId}`} className="hover:text-active dark:hover:text-darkactive text-title dark:text-darktitle text-center grow overflow-scroll">
							{title}
						</Link>
					</div>
					<div className="space-y-4 mt-4">
						{
							participants.map((participantUser: ParticipantUser, index: number) =>
								<ParticipantCard key={participantUser.id} props={{ participantUser, serialNumber: index + 1 }} />)
						}
					</div>
				</div>
			</div>
			<BackButton />
		</div>
	)
}
