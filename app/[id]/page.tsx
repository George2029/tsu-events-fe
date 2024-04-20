import { notFound } from 'next/navigation'

import { DateTime, DateTimeFormatOptions } from "luxon";

import { plainToInstance } from 'class-transformer';

import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';

import { Event } from '@/app/classes/events/event';
import type { EventJSON } from '@/app/types/events/eventTypes';

import EventFooter from '@/app/ui/event/EventFooter';
import EventConfigs from '@/app/ui/event/EventConfigs';
import Feedbacks from '@/app/ui/event/Feedbacks';
import Participants from '@/app/ui/event/Participants';
import EventSimpleField from '@/app/ui/event/EventSimpleField';

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
		moderator,
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

	let eventStartTime = DateTime.fromJSDate(new Date(startTime)).toLocaleString(myTimeConfig)
	let createdAtTime = DateTime.fromJSDate(new Date(createdAt)).toLocaleString(DateTime.DATE_SHORT);
	let eventEndTime = DateTime.fromJSDate(new Date(endTime)).toLocaleString(myTimeConfig);

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
	console.log(placesTotal);

	return (
		<div className="mt-20 px-10 max-w-xl w-full">
			<div className="p-3 bg-neutral-900 rounded-lg">
				<div className="flex font-bold justify-between text-center text-balance gap-4 text-lg">
					<div className="text-center grow overflow-scroll">{title}</div>
					<div className="self-center">{eventIcon}</div>
				</div>
				<div className="space-y-4 mt-4">
					<EventSimpleField props={{ title: 'Location', value: location }} />
					{description && <EventSimpleField props={{ title: 'Description', value: description }} />}
					<EventSimpleField props={{ title: 'Starts at', value: eventStartTime }} />
					<EventSimpleField props={{ title: 'Moderator', value: moderator }} />
					<Participants props={{ placesTotal, eventId: id }} />
					<Feedbacks />
					<EventConfigs />
					<EventFooter props={{ createdAtTime, rating }} />
				</div>
			</div>
		</div>
	)
}


/*
					<div className="p-2 bg-green-950 rounded-lg">
						<div className="text-sm font-semibold">Ends at</div>
						<div>{eventEndTime}</div>
					</div>
					*/
