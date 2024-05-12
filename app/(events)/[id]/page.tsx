import { notFound } from 'next/navigation'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { DateTime, DateTimeFormatOptions } from "luxon";

import { plainToInstance } from 'class-transformer';

import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';

import { Event } from '@/app/classes/events/event';
import type { EventJSON } from '@/app/types/events/eventTypes';

import EventFooter from '@/app/ui/event/EventFooter';
import Feedbacks from './Feedbacks';
import Participants from './Participants';
import EventSimpleField from '@/app/ui/event/EventSimpleField';
import EventConfigs from './EventConfigs';

import Back from '@/app/ui/Back';

const ModEventIcon = dynamic(() => import('@/app/ui/moderation/ModEventIcon'));

export default async function Page(
	{ params }: { params: { id: string } }
) {

	if (isNaN(+params.id)) notFound();

	let res = await fetch(`http://localhost:3000/events/${params.id}`, { cache: 'no-store' });

	if (!res.ok) notFound()

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
	let createdAtTime = DateTime.fromJSDate(createdAt).toLocaleString(DateTime.DATE_SHORT);
	let eventEndTime = DateTime.fromJSDate(endTime).toLocaleString(myTimeConfig);

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

	return (
		<div className="px-5 flex flex-col max-w-xl w-full">
			<div className="mt-20 bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder p-2">
				<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
					<div className="text-center dark:text-darktitle text-title grow overflow-scroll">{title}</div>
					<div className="flex gap-2 self-center">
						<div>{eventIcon}</div>
						<ModEventIcon props={{ id }} />
					</div>
				</div>
				<div className="space-y-4 mt-4">
					<EventSimpleField props={{ title: 'Location', value: location }} />
					{description && <EventSimpleField props={{ title: 'Description', value: description }} />}
					<EventSimpleField props={{ title: 'Starts at', value: eventStartTime }} />
					<Participants props={{ placesTotal, eventId: id }} />
					<Feedbacks props={{ eventId: id }} />
					<EventConfigs props={{ eventId: id, type }} />
					<EventFooter props={{ createdAtTime, rating }} />
				</div>
			</div>
			<Back />
		</div>
	)
}
