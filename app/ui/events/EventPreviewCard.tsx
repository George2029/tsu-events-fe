import { DateTime } from "luxon";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';
import { EventPreview } from '@/app/classes/events/event';

const CreatorPreview = dynamic(() => import('@/app/ui/user/CreatorPreview'), {
	loading: () => <div className="w-full h-5 items-center flex justify-between">
		<div className="h-5 w-32 animate-pulse bg-loading dark:bg-darkloading"></div>
		<div className="h-5 w-32 animate-pulse bg-loading dark:bg-darkloading"></div>
	</div>
});

export default function EventPreviewCard({ ...eventPreview }: EventPreview) {

	let { id, title, type, location, startTime, userId, createdAt } = eventPreview;

	let eventIcon: any;

	let startTimeString = DateTime.fromJSDate(startTime).toLocaleString({
		day: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: '2-digit'
	})

	let createdAtString = DateTime.fromJSDate(createdAt).toLocaleString(DateTime.DATETIME_SHORT);

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
		<div className="space-y-2 mt-6 dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg">
			<div className="flex justify-between gap-2">
				<Link href={'/' + id} className="md:active:scale-90 active:scale-75 duration-300 hover:text-active dark:hover:text-darkactive text-title dark:text-darktitle font-bold text-balance">{title}</Link>
				<div>{eventIcon}</div>
			</div>
			<div>{startTimeString}</div>
			<div>{location}</div>
			<CreatorPreview props={{ userId, createdAtString }} />
		</div>
	)
}
