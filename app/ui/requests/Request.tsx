'use client'

import { useFormState } from 'react-dom'

import Title from './createRequest/Title';
import Description from './createRequest/Description';
import Location from './createRequest/Location';
import Type from './createRequest/Type';
import EndTime from './createRequest/EndTime';
import StartTime from './createRequest/StartTime';

import CreateRequestButton from './createRequest/CreateRequestButton';

import createRequest from '@/app/actions/requests/create';

export default function RequestEvent() {
	let [formState, setFormState] = useFormState(createRequest, { message: '' });
	let now = new Date();
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
	let normalizedTimeString = now.toISOString().slice(0, 16);
	return (
		<form action={setFormState}>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-green-950/60 pb-12">
				<Title />
				<Description />
				<Type />
				<Location />
				<StartTime props={{ normalizedTimeString }} />
				<EndTime props={{ normalizedTimeString }} />
			</div>
			<div className="mt-6 flex flex-col items-end">
				<div>{formState?.message}</div>
				<CreateRequestButton />
			</div>
		</form>
	);
}
