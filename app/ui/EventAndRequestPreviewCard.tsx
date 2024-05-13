import { DateTime } from "luxon";
// import Skeleton from '@/app/ui/globals/EventsOrRequestsLoadingSkeleton';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';
import { EventOrRequestPreview } from '@/app/classes/EventOrRequestPreview';

const CreatorPreview = dynamic(() => import('@/app/ui/user/CreatorPreview'), {
	loading: () => <div className="flex justify-between">
		<div className="h-5 w-32 rounded-md animate-pulse bg-loading dark:bg-darkloading"></div>
		<div className="h-5 w-20 rounded-md animate-pulse bg-loading dark:bg-darkloading"></div>
	</div>
});

export default function EventOrRequestPreviewCard({ props }: { props: { requests?: boolean, eventOrRequestPreview: EventOrRequestPreview } }) {

	let { id, title, type, location, startTime, userId, createdAt } = props.eventOrRequestPreview;
	let { requests } = props;

	let link = `/`;
	if (requests) {
		link = link + `requests/${id}`;
	} else {
		link = link + id;
	}

	let eventIcon: any;

	let startTimeString = DateTime.fromJSDate(startTime).toLocaleString({
		day: 'numeric',
		month: 'long',
		hour: 'numeric',
		minute: '2-digit'
	})

	let createdAtString = DateTime.fromJSDate(createdAt).toLocaleString(DateTime.DATETIME_SHORT);

	let iconCaption = '';

	switch (type) {
		case "CUSTOM_EVENT":
			eventIcon = OtherEventIcon;
			iconCaption = 'Custom event';
			break;
		case "MOVIE_EVENT":
			eventIcon = MovieIcon;
			iconCaption = 'Movie event';
			break;
		case "BOARD_GAMES_EVENT":
			eventIcon = BoardGameIcon;
			iconCaption = 'Board games event';
			break;
		case "CONTEST_EVENT":
			eventIcon = ContestIcon;
			iconCaption = 'Contest event';
			break;
	}


	return (
		<div className="space-y-2 mt-6 dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg">
			<div className="flex justify-between gap-2">
				<Link href={link} className="md:active:scale-90 active:scale-75 duration-300 hover:text-active dark:hover:text-darkactive text-title dark:text-darktitle font-bold text-balance">{title}</Link>
				<div custom-attribute={iconCaption} className="relative hover:after:text-center hover:after:z-10 hover:after:absolute hover:after:top-8 hover:after:right-0 hover:after:w-24 text-xs hover:after:bg-background dark:hover:after:bg-darkbackground dark:hover:after:ring-darkactive hover:after:ring-1 hover:after:rounded-lg hover:after:ring-active hover:after:p-2 hover:after:content-[attr(custom-attribute)]">{eventIcon}</div>
			</div>
			<div>{startTimeString}</div>
			<div>{location}</div>
			<CreatorPreview props={{ userId, createdAtString }} />
		</div>
	)
}
