'use client'

import { useFormState } from 'react-dom'

import Title from './edit/Title';
import Description from './edit/Description';
import Location from './edit/Location';
import Type from './edit/Type';
import EndTime from './edit/EndTime';
import StartTime from './edit/StartTime';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { RequestStatus } from '@/app/classes/requests/enums/requestStatus.enum';

import UpdateRequestButton from './edit/UpdateRequestButton';
import EndOfRequestTime from './edit/EndOfRequestTime';
import Status from './edit/Status';

import edit from '@/app/actions/requests/experienced.update';
import editAsMod from '@/app/actions/requests/mod.update';
import deleteRequest from '@/app/actions/requests/delete';

export default function EditRequest({ props }: {
	props: {
		id: number,
		existingTitle: string,
		existingLocation: string,
		existingType: EventType,
		existingStartTime: string;
		existingEndTime: string;
		existingStatus?: RequestStatus;
		existingEndOfRequestTime?: string;
		existingDescription?: string | null;
	}
}
) {
	let {
		id,
		existingTitle,
		existingDescription,
		existingLocation,
		existingType,
		existingStatus,
		existingEndOfRequestTime,
		existingStartTime,
		existingEndTime,
	} = props;

	let action = existingStatus ? editAsMod : edit;
	let [formState, setFormState] = useFormState(action, { message: '' });

	let deleteRequestBinded = deleteRequest.bind(null, id, existingType);
	return (
		<>
			<form action={setFormState}>
				<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-blue-800/30 pb-6">
					<input type="hidden" name="id" value={id} />
					<Title props={{ existingValue: existingTitle }} />
					<Description props={{ existingValue: existingDescription }} />
					<Location props={{ existingValue: existingLocation }} />
					<Type props={{ existingValue: existingType }} />
					{existingEndOfRequestTime && <EndOfRequestTime props={{ existingValue: existingEndOfRequestTime }} />}
					{existingStatus && <Status props={{ existingValue: existingStatus }} />}
					<StartTime props={{ existingValue: existingStartTime }} />
					<EndTime props={{ existingValue: existingEndTime }} />
				</div>
				<div className="mt-6 flex flex-col items-end">
					<div>{formState.message}</div>
					<UpdateRequestButton />
				</div>
			</form>
			<form className="absolute bottom-5" action={deleteRequestBinded}>
				<button
					type="submit"
					className="btn"
				>
					Delete
				</button>
			</form>
		</>
	);
}
