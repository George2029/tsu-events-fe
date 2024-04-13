import { notFound } from 'next/navigation'

import { DateTime, DateTimeFormatOptions } from "luxon";

import { plainToInstance } from 'class-transformer';

import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';

import Link from 'next/link';

import { ArrowUTurnLeft } from '@/app/ui/icons/otherIcons';

import { Event } from '@/app/classes/event';

import type { EventJSON } from '@/app/types/events/eventTypes';

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
	let eventEndTime = DateTime.fromJSDate(new Date(endTime)).toLocaleString(DateTime.DATE_SHORT);

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
		<div className="md:mt-20 w-full">
			<div className="flex justify-between gap-2">
				<div className="font-bold text-balance">{title}</div>
				<div>{eventIcon}</div>
			</div>
			<div>{location}</div>
			<div>{description}</div>
			<div>PlacesTotal: {placesTotal}</div>
			<div>{eventStartTime}</div>
			<div>Status: {status}</div>
			<div>Rating: {rating}</div>
			<div>Moderator: {moderator}</div>
			<div>Event ends at: {eventEndTime}</div>
			<div>Published: {createdAtTime}</div>
			<Link href="/">
				{ArrowUTurnLeft}
			</Link>
		</div>
	)
}


