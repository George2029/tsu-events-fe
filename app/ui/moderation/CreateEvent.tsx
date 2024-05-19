'use client'

import { useFormState } from 'react-dom';
import { useState } from 'react';
import createEvent from '@/app/actions/events/create';

import MovieEventConfig from './createMovieEventConfig/MovieEventConfig'
import BoardGamesEventConfig from './createBoardGamesEventConfig/BoardGamesConfig';
import ContestEventConfig from './createContestEventConfig/ContestConfig';
import CustomEventConfig from './createCustomEventConfig/CustomConfig';

import CreateEventButton from './createEvent/CreateEventButton';

import Title from './createEvent/Title';
import Description from './createEvent/Description';
import Location from './createEvent/Location';
import Type from './createEvent/Type';
import EndTime from './createEvent/EndTime';
import PlacesTotal from './createEvent/PlacesTotal';
import StartTime from './createEvent/StartTime';

export default function CreateOneEvent() {

	let [formState, setFormState] = useFormState(createEvent, { message: '' });
	let [eventType, setEventType] = useState<string>('');
	const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
		setEventType(e.target.value);
	}
	let now = new Date();
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
	let normalizedTimeString = now.toISOString().slice(0, 16);

	return (
		<form className="" action={setFormState}>
			<h2 className="font-semibold text-center pb-6">New Event</h2>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-blue-800/30 pb-6">
				<Title />
				<Description />
				<Type props={{ onTypeChange }} />
				<MovieEventConfig props={{ eventType }} />
				<BoardGamesEventConfig props={{ eventType }} />
				<ContestEventConfig props={{ eventType }} />
				<CustomEventConfig props={{ eventType }} />
				<Location />
				<PlacesTotal />
				<StartTime props={{ normalizedTimeString }} />
				<EndTime props={{ normalizedTimeString }} />
			</div>
			<div className="flex flex-col items-center">
				<div>{formState?.message}</div>
				<CreateEventButton />
			</div>
		</form>
	)
}

