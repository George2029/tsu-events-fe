'use client'

import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { EventStatus } from '@/app/classes/events/enums/eventStatus.enum';
import { useFormState } from 'react-dom';
import editEvent from '@/app/actions/events/edit';
import deleteEvent from '@/app/actions/events/delete';

import EditEventButton from './editEvent/EditEventButton';

import Title from './editEvent/Title';
import Type from './editEvent/Type';
import Status from './editEvent/Status';
import Description from './editEvent/Description';
import Location from './editEvent/Location';
import EndTime from './editEvent/EndTime';
import PlacesTotal from './editEvent/PlacesTotal';
import StartTime from './editEvent/StartTime';

export default function EditOneEvent({ props }: {
	props: {
		id: number,
		existingTitle: string,
		existingStatus: EventStatus,
		existingLocation: string,
		existingType: EventType,
		existingPlacesTotal: number,
		existingStartTime: string;
		existingEndTime: string;
		existingDescription?: string;
	}
}
) {
	let {
		id,
		existingTitle,
		existingDescription,
		existingLocation,
		existingStatus,
		existingType,
		existingPlacesTotal,
		existingStartTime,
		existingEndTime,
	} = props;

	let [formState, setFormState] = useFormState(editEvent, { message: '' });
	let removeEvent = deleteEvent.bind(null, id, existingType);

	return (
		<>
			<form action={setFormState}>
				<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-blue-800/30 pb-6">
					<input type="hidden" name="id" value={id} />
					<Title props={{ existingValue: existingTitle }} />
					<Description props={{ existingValue: existingDescription }} />
					<Location props={{ existingValue: existingLocation }} />
					<PlacesTotal props={{ existingValue: existingPlacesTotal }} />
					<Status props={{ existingValue: existingStatus }} />
					<Type props={{ existingValue: existingType }} />
					<StartTime props={{ existingValue: existingStartTime }} />
					<EndTime props={{ existingValue: existingEndTime }} />
				</div>
				<div className="flex justify-end">
					<div>{formState?.message}</div>
					<EditEventButton />
				</div>
			</form>
			<form className="absolute bottom-5" action={removeEvent}>
				<button
					type="submit"
					className="btn"
				>
					Delete
				</button>
			</form>
		</>
	)
}

