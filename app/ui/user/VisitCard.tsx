import { DateTime } from "luxon";
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

import type { Visit } from '@/app/types/visit';
import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';

import { QRCodeIcon, CheckIcon, NoSymbol } from '@/app/ui/icons/icons';
import { ChevronDownMicro, TimeMicro } from '@/app/ui/icons/microIcons';
import { ShieldCheckFilled } from '@/app/ui/icons/fillIcons';

//import { headers } from 'next/headers';

export default function VisitCard({ props }: { props: { visit: Visit } }) {

	let { visit: { id, eventId, userId, status, event } } = props;

	//const headersList = headers();
	//const hostname = headersList.get('x-forwarded-host');

	let participantStatusBlock: any;

	switch (status) {
		case ParticipantStatus.ISGOING:
			participantStatusBlock = (
				<div className="flex gap-2 items-center">
					<div className="text-green-500">{CheckIcon}</div>
					<div className="font-semibold text-sm">Booked!</div>
				</div>
			)
			break;
		case ParticipantStatus.ISPRESENT:
			participantStatusBlock = (
				<div className="flex gap-2 items-center">
					<div className="text-green-500">{ShieldCheckFilled}</div>
					<div className="font-semibold text-sm">Visited!</div>
				</div>
			)
			break;
		case ParticipantStatus.ISABSENT:
			participantStatusBlock = (
				<div className="flex gap-2 items-center">
					<div className="text-red-500">{NoSymbol}</div>
					<div className="font-semibold text-sm">Missed the event :(</div>
				</div>
			)

	}

	let qrcodeLink = 'http://' + '10.20.167.65:3001' + '/participantIsPresent/' + id + '/' + eventId + '/' + userId;

	console.log(qrcodeLink);
	let startTimeString = DateTime.fromJSDate(new Date(event.startTime)).toLocaleString(DateTime.DATETIME_SHORT);

	return (
		<li className="mt-4 p-4 space-y-4 bg-cardBG ring-border ring-1 rounded-xl dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive dark:bg-darkcardBG">
			<Link href={`/${eventId}`} className="text-title dark:text-darktitle hover:text-active dark:hover:text-darkactive" >{event.title}</Link>
			{participantStatusBlock}
			<div className="flex gap-4 items-center text-sm">
				{TimeMicro}
				{startTimeString}
			</div>
			<details>
				<summary className="flex gap-2 items-center">
					{QRCodeIcon}
					<div>{ChevronDownMicro}</div>
				</summary>
				<QRCodeSVG className="mt-2" value={qrcodeLink} />
			</details>
		</li>
	)
}
