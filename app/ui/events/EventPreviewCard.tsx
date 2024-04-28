import { DateTime } from "luxon";
import Link from "next/link";
import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';
import { Event } from '@/app/classes/events/event';

export default function EventPreviewCard({ ...event }: Event) {

	let { id, title, type, location, startTime } = event;

	let eventIcon: any;
	let dt = DateTime.fromJSDate(new Date(startTime));
	let time = dt.toLocaleString({
		day: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: '2-digit'
	})

	switch (type) {
		case "CUSTOM_EVENT":
			eventIcon = OtherEventIcon;
			break;
		case "MOVIE_EVENT":
			eventIcon = MovieIcon;
			break;
		case "BOARD_GAMES_EVENT":
			eventIcon = BoardGameIcon;
			break;
		case "CONTEST_EVENT":
			eventIcon = ContestIcon;
			break;
	}


	return (
		<div className="dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg">
			<div className="flex justify-between gap-2">
				<Link href={'/' + id} className="md:active:scale-90 active:scale-75 duration-300 hover:text-active dark:hover:text-darkactive text-title dark:text-darktitle font-bold text-balance">{title}</Link>
				<div>{eventIcon}</div>
			</div>
			<div>{time}</div>
			<div>{location}</div>
		</div>
	)
}
