import { notFound } from 'next/navigation'
//import Skeleton from '@/app/ui/event/Skeleton';

import dynamic from 'next/dynamic';
import { DateTime, DateTimeFormatOptions } from "luxon";

import { plainToInstance } from 'class-transformer';

import { MovieIcon, BoardGameIcon, ContestIcon, CustomIcon } from '@/app/ui/icons/eventsBarIcons';

import { ChevronDownMicro } from '@/app/ui/icons/microIcons';

import { Event } from '@/app/classes/events/event';
import type { EventJSON } from '@/app/types/events/eventTypes';

import Participants from './Participants';
import EventConfigs from './EventConfigs';

import BackButton from '@/app/ui/buttons/Back';

const CreatorPlaceholder = () => <div className="h-5 w-full bg-loading dark:bg-darkloading animate-pulse rounded-lg"></div>;

const CreatorPreview = dynamic(() => import('@/app/ui/user/FetchCreatorPreviewAndDisplay'), { loading: () => <CreatorPlaceholder /> });

const ModButton = dynamic(() => import('@/app/ui/buttons/Mod'), { loading: () => <div></div> });

export default async function Page(
	{ params }: { params: { id: string } }
) {

	if (isNaN(+params.id)) notFound();

	let res = await fetch(`http://localhost:3000/events/${params.id}`, { cache: 'no-store' });

	if (!res.ok) notFound()

	await new Promise((res) => setTimeout(() => res(1), 1500));
	console.log(`artificially delayed by 1500ms)`);

	let eventJSON: EventJSON = await res.json();

	let event = plainToInstance(Event, eventJSON);

	let {
		id,
		type,
		title,
		location,
		userId,
		placesTotal,
		status,
		startTime,
		endTime,
		rating,
		createdAt,
		updatedAt,
		description,
	} = event;

	const myTimeConfig: DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		hour: "numeric",
		minute: "2-digit"
	}

	let eventStartTime = DateTime.fromJSDate(startTime).toLocaleString(myTimeConfig)
	let createdAtString = DateTime.fromJSDate(createdAt).toLocaleString(DateTime.DATE_SHORT);
	let eventEndTime = DateTime.fromJSDate(endTime).toLocaleString(myTimeConfig);

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

	return (
		<>
			<div className="mt-20 bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder p-2">
				<div className="p-2">
					<div className="h-[4.5rem] flex justify-between text-center text-balance gap-4 text-lg">
						<div className="self-center font-bold text-center dark:text-darktitle text-title grow overflow-scroll">{title}</div>
						<div custom-attribute={iconCaption} className="relative hover:after:z-10 hover:after:absolute hover:after:top-8 hover:after:right-0 hover:after:w-24 text-xs hover:after:bg-background dark:hover:after:bg-darkbackground dark:hover:after:ring-darkactive hover:after:ring-1 hover:after:rounded-lg hover:after:ring-active hover:after:p-2 hover:after:content-[attr(custom-attribute)]" >{eventIcon}</div>
					</div>
					<div className="flex flex-col mt-4 gap-3 p-2">
						<div>
							<div title="The time the event starts" className="text-sm font-semibold">Starts at</div>
							<div>{eventStartTime}</div>
						</div>
						<div>
							<div className="text-sm font-semibold">Location</div>
							<div>{location}</div>
						</div>
						<details>
							<summary className="flex gap-1 cursor-pointer text-sm font-semibold"><span>Description</span><span className="self-center">{ChevronDownMicro}</span></summary>
							<div>{description ? description : 'No description for this event'}</div>
						</details>
						<Participants props={{ placesTotal, eventId: id }} />
						<EventConfigs props={{ eventId: id, type }} />
						<CreatorPreview props={{ userId, createdAtString }} />
					</div>
				</div>
			</div>
			<div className="flex justify-between">
				<div>
					<ModButton props={{ id }} />
				</div>
				<BackButton />
			</div>

		</>
	)
}

