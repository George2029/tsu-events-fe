import dynamic from 'next/dynamic';
import { ChevronDownMicro } from '@/app/ui/icons/microIcons';
import { CheckIcon, XIcon } from '@/app/ui/icons/icons';
import Back from '@/app/ui/buttons/Back';
import { getRequest } from '@/app/actions/requests/getRequest';
import { DateTime, DateTimeFormatOptions } from "luxon";
import { MovieIcon, BoardGameIcon, ContestIcon, CustomIcon } from '@/app/ui/icons/eventsBarIcons';

const ModButtong = dynamic(() => import('@/app/ui/buttons/Mod'), { loading: () => <div className="order-2"></div> });

const Vote = dynamic(() => import('./Vote'), { loading: () => <div className="h-[1.625rem] w-full bg-loading dark:bg-darkloading rounded-lg"></div> });

const VotesPlaceholder = () => <div className="h-4 w-8 bg-loading dark:bg-darkloading animate-pulse rounded-lg"></div>;
const CreatorPlaceholder = () =>
	<div className="flex justify-between">
		<div className="h-5 w-20 bg-loading dark:bg-darkloading rounded-md "></div>
		<div className="h-5 w-12 bg-loading dark:bg-darkloading rounded-md "></div>
	</div>


const YesVotesCount = dynamic(() => import('./YesVotesCount'), {
	loading: () => <VotesPlaceholder />
});

const NoVotesCount = dynamic(() => import('./NoVotesCount'), {
	loading: () => <VotesPlaceholder />
});

const RequestorButton = dynamic(() => import('@/app/ui/buttons/Requestor'), { loading: () => <div className="order-1"></div> });

const CreatorPreview = dynamic(() => import('@/app/ui/user/FetchCreatorPreviewAndDisplay'), { loading: () => <CreatorPlaceholder /> });

export default async function RequestPage({ params }: {
	params: {
		id: string
	}
}) {

	let request = await getRequest(params.id);

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
	let iconCaption = '';

	switch (type) {
		case "CUSTOM_EVENT":
			eventIcon = CustomIcon;
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
		<div className="mx-auto px-5 w-full max-w-xl flex flex-col">
			<div className="mt-20 bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder p-2">
				<div className="p-2">
					<div className="h-[4.5rem] flex justify-between text-center text-balance gap-4 text-lg">
						<div className="self-center font-bold text-center dark:text-darktitle text-title grow overflow-scroll">{title}</div>
						<div custom-attribute={iconCaption} className="relative hover:after:z-10 hover:after:absolute hover:after:top-8 hover:after:right-0 hover:after:w-24 text-xs hover:after:bg-background dark:hover:after:bg-darkbackground dark:hover:after:ring-darkactive hover:after:ring-1 hover:after:rounded-lg hover:after:ring-active hover:after:p-2 hover:after:content-[attr(custom-attribute)]" >{eventIcon}</div>
					</div>
				</div>
				<div className="flex flex-col mt-4 gap-3 p-2">
					<div>
						<div className="text-sm font-semibold">Starts at</div>
						<div>{startTimeString}</div>
					</div>
					<div>
						<div className="text-sm font-semibold">Location</div>
						<div className="text-nowrap overflow-x-scroll">{location}</div>
					</div>
					<details>
						<summary className="flex gap-1 cursor-pointer text-sm font-semibold">
							<span>Description</span>
							<span className="self-center">{ChevronDownMicro}</span>
						</summary>
						<div>{description ? description : 'No description for this request'}</div>
					</details>
					<div>
						<span>
							<span className="text-sm font-semibold">Votes</span>
							<span className={`text-green-500 flex gap-2 items-center`}>
								<span>{CheckIcon}</span>
								<span>:</span>
								<span><YesVotesCount props={{ id }} /></span>
							</span>
							<span className={`text-red-500 flex gap-2 items-center`}>
								<span>{XIcon}</span>
								<span>:</span>
								<span><NoVotesCount props={{ id }} /></span>
							</span>
						</span>
						<div className="flex gap-4 mt-3">
							<Vote props={{ id }} />
						</div>
					</div>

					<CreatorPreview props={{ userId, createdAtString }} />
					<span className="text-center font-light text-sm">till {endOfRequestString}</span>

				</div>
			</div>
			<div className="flex justify-between">
				<div>
					<RequestorButton props={{ id }} />
				</div>
				<div>
					<ModButtong props={{ id, request: true }} />
				</div>
				<Back />
			</div>
		</div>
	)
}
