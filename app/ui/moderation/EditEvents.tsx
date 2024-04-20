'use client'

import { useFormState } from 'react-dom';
import { useState } from 'react';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import createEvent from '@/app/actions/events/create';
import MovieEventConfig from './createMovieEventConfig/MovieEventConfig'
import CreateEventButton from './createEvent/CreateEventButton';

import Title from './createEvent/Title';
import Description from './createEvent/Description';
import Location from './createEvent/Location';
import Type from './createEvent/Type';
import EndTime from './createEvent/EndTime';
import Moderator from './createEvent/Moderator';
import PlacesTotal from './createEvent/PlacesTotal';
import StartTime from './createEvent/StartTime';

function CreateOneEvent() {

	let [formState, setFormState] = useFormState(createEvent, { message: '' });
	let [eventType, setEventType] = useState<string>(EventType.CUSTOM_EVENT);
	const onTypeChange = (e: React.FormEvent<HTMLInputElement>) => setEventType(e.currentTarget.value);
	let now = new Date();
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
	let normalizedTimeString = now.toISOString().slice(0, 16);

	return (
		<form className="md:mx-20" action={setFormState}>
			<h2 className="font-semibold text-center pb-12">New Event</h2>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-green-950/60 pb-12">
				<Title />
				<Description />
				<Type props={{ onTypeChange }} />
				<Location />
				<PlacesTotal />
				<Moderator />
				<StartTime props={{ normalizedTimeString }} />
				<EndTime props={{ normalizedTimeString }} />
				<MovieEventConfig props={{ eventType }} />
			</div>
			<div className="mt-6 flex flex-col items-end">
				<div>{formState?.message}</div>
				<CreateEventButton />
			</div>
		</form>
	)
}

export default function EditEvents() {
	return (
		<div>
			<CreateOneEvent />
		</div>
	)
}
