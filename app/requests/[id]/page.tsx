import dynamic from 'next/dynamic';
import { getRequest } from '@/app/actions/requests/getRequest';
import { DateTime, DateTimeFormatOptions } from "luxon";
import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';

const ModEventIcon = dynamic(() => import('@/app/ui/moderation/ModEventIcon'));

const RequestorEditIcon = dynamic(() => import('@/app/ui/exp/RequestorEditIcon'));

const Votes = dynamic(() => import('./VotesFetch'), {
	loading: () => <div className="h-4 w-6 animate-pulse rounded-md bg-loading dark:bg-darkloading"></div>
});

const CreatorPreview = dynamic(() => import('@/app/ui/user/CreatorPreview'), {
	loading: () => <div className="w-full h-5 items-center flex justify-between">
		<div className="h-5 w-32 animate-pulse bg-loading dark:bg-darkloading"></div>
		<div className="h-5 w-32 animate-pulse bg-loading dark:bg-darkloading"></div>
	</div>
});

export default async function RequestPage({ params }: {
	params: {
		id: string
	}
}) {

	let request = await getRequest(params.id);

	console.log(request);

	let {
		id,
		type,
		userId,
		title,
		location,
		startTime,
		endTime,
		description,
		createdAt,
		endOfRequestTime,
		status,
	} = request;


	let eventIcon: any;

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

	const myTimeConfig: DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		hour: "numeric",
		minute: "2-digit"
	}

	let startTimeString = DateTime.fromJSDate(startTime).toLocaleString(myTimeConfig)
	let createdAtString = DateTime.fromJSDate(createdAt).toLocaleString(DateTime.DATE_SHORT);
	let endOfRequestString = DateTime.fromJSDate(endOfRequestTime).toLocaleString(DateTime.DATE_SHORT);

	return (
		<div className="px-5 w-full max-w-xl flex flex-col">
			<div className="mt-20 bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder p-2 max-w-xl w-full">
				<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
					<div className="text-center dark:text-darktitle text-title grow overflow-scroll">
						{title}
					</div>
					<div className="flex items-center gap-1 self-center">
						<RequestorEditIcon props={{ id }} />
						<ModEventIcon props={{ id, request: true }} />
						{eventIcon}
					</div>
				</div>
				<div className="flex flex-col mt-4 gap-3 p-2">
					<div>
						<div className="text-sm font-semibold">Location</div>
						<div>{location}</div>
					</div>
					<div>
						<div className="text-sm font-semibold">Description</div>
						<div>{description ? description : 'this request has no description'}</div>
					</div>
					<div>
						<div className="text-sm font-semibold">Start Time</div>
						<div>{startTimeString}</div>
					</div>
					<Votes props={{ requestId: id }} />
					<CreatorPreview props={{ userId, createdAtString }} />
					<span className="text-center font-light text-sm">till {endOfRequestString}</span>

				</div>
			</div>
		</div>
	)
}
