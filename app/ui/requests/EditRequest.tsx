'use client'

import { useFormState } from 'react-dom'

import Title from './editRequest/Title';
import Description from './editRequest/Description';
import Location from './editRequest/Location';
import Type from './editRequest/Type';
import EndTime from './editRequest/EndTime';
import StartTime from './editRequest/StartTime';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

import UpdateRequestButton from './editRequest/UpdateRequestButton';

import editRequest from '@/app/actions/requests/experienced.update';

export default function EditRequest({ props }: {
	props: {
		id: number,
		existingTitle: string,
		existingLocation: string,
		existingType: EventType,
		existingStartTime: string;
		existingEndTime: string;
		existingDescription?: string;
	}
}
) {
	let [formState, setFormState] = useFormState(editRequest, { message: '' });
	let {
		id,
		existingTitle,
		existingDescription,
		existingLocation,
		existingType,
		existingStartTime,
		existingEndTime,
	} = props;
	return (
		<form action={setFormState}>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-green-950/60 pb-12">
				<input type="hidden" name="id" value={id} />
				<Title props={{ existingValue: existingTitle }} />
				<Description props={{ existingValue: existingDescription }} />
				<Location props={{ existingValue: existingLocation }} />
				<Type props={{ existingValue: existingType }} />
				<StartTime props={{ existingValue: existingStartTime }} />
				<EndTime props={{ existingValue: existingEndTime }} />
			</div>
			<div className="mt-6 flex flex-col items-end">
				<div>{formState?.message}</div>
				<UpdateRequestButton />
			</div>
		</form>
	);
}
