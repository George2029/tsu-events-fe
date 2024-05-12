import dynamic from 'next/dynamic';
import { CheckIcon, XIcon } from '@/app/ui/icons';
import Back from '@/app/ui/Back';
import { getRequest } from '@/app/actions/requests/getRequest';
import { DateTime, DateTimeFormatOptions } from "luxon";
import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';

const ModEventIcon = dynamic(() => import('@/app/ui/moderation/ModEventIcon'));

const Vote = dynamic(() => import('./Vote'), { loading: () => <div className="h-[1.625rem] w-full bg-loading dark:bg-darkloading rounded-lg"></div> });

const VotesPlaceholder = () => <div className="h-4 w-8 bg-loading dark:bg-darkloading animate-pulse rounded-lg"></div>;
const CreatorPlaceholder = () => <div className="h-5 w-full bg-loading dark:bg-darkloading animate-pulse rounded-lg"></div>;

const YesVotesCount = dynamic(() => import('./YesVotesCount'), {
	loading: () => <VotesPlaceholder />
});

const NoVotesCount = dynamic(() => import('./NoVotesCount'), {
	loading: () => <VotesPlaceholder />
});

const RequestorEditIcon = dynamic(() => import('@/app/ui/exp/RequestorEditIcon'));

const CreatorPreview = dynamic(() => import('@/app/ui/user/CreatorPreview'), { loading: () => <CreatorPlaceholder /> });

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
					<div>
						<span>
							<span className="text-sm font-semibold">Votes</span>
							<span className={`text-green-500 flex items-center`}>{CheckIcon}: <YesVotesCount props={{ id }} /></span>
							<span className={`text-red-500 flex items-center`}>{XIcon}: <NoVotesCount props={{ id }} /></span>
						</span>
						<div className="flex gap-2 mt-1">
							<Vote props={{ id }} />
						</div>
					</div>

					<CreatorPreview props={{ userId, createdAtString }} />
					<span className="text-center font-light text-sm">till {endOfRequestString}</span>

				</div>
			</div>
			<Back />
		</div>
	)
}
