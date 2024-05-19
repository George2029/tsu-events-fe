'use client'

import { useFormState } from 'react-dom'

import Title from './create/Title';
import Description from './create/Description';
import Location from './create/Location';
import Type from './create/Type';
import EndTime from './create/EndTime';
import StartTime from './create/StartTime';

import CreateRequestButton from './create/CreateRequestButton';

import create from '@/app/actions/requests/create';

export default function RequestEvent() {
	let [formState, setFormState] = useFormState(create, { message: '' });
	let now = new Date();
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
	let normalizedTimeString = now.toISOString().slice(0, 16);
	return (
		<form action={setFormState}>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-blue-800/20 pb-6">
				<Title />
				<Description />
				<Type />
				<Location />
				<StartTime props={{ normalizedTimeString }} />
				<EndTime props={{ normalizedTimeString }} />
			</div>
			<div className="flex flex-col items-center">
				<div>{formState?.message}</div>
				<CreateRequestButton />
			</div>
		</form>
	);
}
