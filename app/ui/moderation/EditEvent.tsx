'use client'

import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { EventStatus } from '@/app/classes/events/enums/eventStatus.enum';
import { useFormState } from 'react-dom';
import editEvent from '@/app/actions/events/edit';

import EditEventButton from './editEvent/EditEventButton';

import Title from './editEvent/Title';
import Type from './editEvent/Type';
import Status from './editEvent/Status';
import Description from './editEvent/Description';
import Location from './editEvent/Location';
import EndTime from './editEvent/EndTime';
import Moderator from './editEvent/Moderator';
import PlacesTotal from './editEvent/PlacesTotal';
import StartTime from './editEvent/StartTime';

export default function EditOneEvent({ props }: {
	props: {
		id: number,
		existingTitle: string,
		existingStatus: EventStatus,
		existingLocation: string,
		existingType: EventType,
		existingModerator: string;
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
		existingModerator,
		existingPlacesTotal,
		existingStartTime,
		existingEndTime,
	} = props;

	let [formState, setFormState] = useFormState(editEvent, { message: '' });

	return (
		<form className="" action={setFormState}>
			<h2 className="font-semibold text-center pb-6">Edit Event</h2>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-green-950/60 pb-12">
				<input type="hidden" name="id" value={id} />
				<Title props={{ existingValue: existingTitle }} />
				<Description props={{ existingValue: existingDescription }} />
				<Location props={{ existingValue: existingLocation }} />
				<PlacesTotal props={{ existingValue: existingPlacesTotal }} />
				<Moderator props={{ existingValue: existingModerator }} />
				<Status props={{ existingValue: existingStatus }} />
				<Type props={{ existingValue: existingType }} />
				<StartTime props={{ existingValue: existingStartTime }} />
				<EndTime props={{ existingValue: existingEndTime }} />
			</div>
			<div className="mt-6 flex flex-col items-end">
				<div>{formState?.message}</div>
				<EditEventButton />
			</div>
		</form>
	)
}

