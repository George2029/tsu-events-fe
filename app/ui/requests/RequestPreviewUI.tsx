import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';
import Link from "next/link";
import { DateTime } from "luxon";
import { RequestPreview } from '@/app/classes/requests/request';

function RequestorAvatar() {

}

export default function RequestPreviewUI({ props }: { props: { requestPreview: RequestPreview } }) {
	let { id, userId, title, type, location, startTime, createdAt } = props.requestPreview;
	let requestIcon: any;
	let dt = DateTime.fromJSDate(startTime);
	let time = dt.toLocaleString({
		day: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: '2-digit'
	})
	switch (type) {
		case "CUSTOM_EVENT":
			requestIcon = OtherEventIcon;
			break;
		case "MOVIE_EVENT":
			requestIcon = MovieIcon;
			break;
		case "BOARD_GAMES_EVENT":
			requestIcon = BoardGameIcon;
			break;
		case "CONTEST_EVENT":
			requestIcon = ContestIcon;
			break;
	}

	return (
		<div className="mt-6 dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg">
			<div className="flex justify-between gap-2">
				<Link href={'/requests/' + id} className="md:active:scale-90 active:scale-75 duration-300 hover:text-active dark:hover:text-darkactive text-title dark:text-darktitle font-bold text-balance">{title}</Link>
				<div>{requestIcon}</div>
			</div>
			<div>{time}</div>
			<div>{location}</div>
		</div>
	)
}
