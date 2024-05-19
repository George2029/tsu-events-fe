import { DateTime } from "luxon";
import type { Visit } from '@/app/types/visit';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { ChevronDownMicro } from '@/app/ui/icons/microIcons';
//import { headers } from 'next/headers';

export default function VisitCard({ props }: { props: { visit: Visit } }) {
	let { visit } = props;
	//const headersList = headers();
	//const hostname = headersList.get('x-forwarded-host');
	let qrcodeLink = 'http://' + '10.20.167.65:3001' + '/participantIsPresent/' + visit.id + '/' + visit.eventId + '/' + visit.userId;
	console.log(qrcodeLink);
	let startTimeString = DateTime.fromJSDate(new Date(visit.event.startTime)).toLocaleString(DateTime.DATETIME_SHORT);
	return (
		<li className="mt-4 p-4 space-y-4 bg-cardBG ring-border ring-1 rounded-xl dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive dark:bg-darkcardBG">
			<Link href={`/${visit.eventId}`}>{visit.event.title}</Link>
			<div>{visit.status}</div>
			<div>{startTimeString}</div>
			<details>
				<summary className="flex gap-2 items-center">
					<div>QR Code</div>
					<div>{ChevronDownMicro}</div>
				</summary>
				<QRCodeSVG className="mt-2" value={qrcodeLink} />
			</details>
		</li>
	)
}
