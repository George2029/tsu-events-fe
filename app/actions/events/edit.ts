'use server'

import { revalidateTag } from 'next/cache';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { EventStatus } from '@/app/classes/events/enums/eventStatus.enum';

import { UpdateEventDto } from '@/app/classes/events/dto/update-event.dto';

type PrevState = {
	message: string;
}

export default async function EditEvent(prevState: PrevState, formData: FormData) {
	let sid = cookies().get('connect.sid');
	if (!sid) return redirect('/signin');

	let previousType = formData.get('previousType');
	let id = String(formData.get('id'));



	let updateEventDto: UpdateEventDto = {};

	let title = formData.get('title')?.toString().trim();
	if (title) {
		updateEventDto.title = title;
	}

	let location = formData.get('location')?.toString().trim();
	if (location) {
		updateEventDto.location = location;
	}

	let description = formData.get('description')?.toString().trim();
	if (description) {
		updateEventDto.description = description;
	}

	let type = formData.get('type') as EventType;
	if (type) {
		updateEventDto.type = type;
	}

	let placesTotal = Number(formData.get('placesTotal'));
	if (placesTotal) {
		updateEventDto.placesTotal = placesTotal;
	}

	let startTime = new Date(String(formData.get('startTime')));
	if (!isNaN(startTime.getTime())) {
		updateEventDto.startTime = new Date(startTime);
	}

	let endTime = new Date(String(formData.get('endTime')));
	if (!isNaN(endTime.getTime())) {
		updateEventDto.endTime = new Date(endTime);
	}

	let status = formData.get('status') as EventStatus;
	if (status) {
		updateEventDto.status = status;
	}

	if (!Object.keys(updateEventDto).length) {
		console.log(`redirecting bc of empty dto`);
		redirect(`/` + id);
	}

	let event = plainToInstance(UpdateEventDto, updateEventDto);

	let valid = await validate(event);

	if (valid.length) {
		console.log(`Event editing has failed: `, valid);
		return { message: String(valid[0]) };
	}

	let res = await fetch(`http://localhost:3000/mod/events/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
			Cookie: `${sid.name}=${sid.value}`
		},
		body: JSON.stringify(event)
	});

	if (!res.ok) {
		let resJSON = await res.json();
		console.log(resJSON);
		return {
			message: JSON.stringify(resJSON)
		}
	}

	let editedEvent = await res.json();
	console.log(`The moderator has edited an event: `, id);

	if (type !== previousType) {
		revalidateTag('event' + id);
		revalidateTag('events' + type);
		revalidateTag('events' + previousType); // if type is changed, then route with events of the previous type has to be revalidated as well.
	} else {
		if (title || status || startTime || location) {
			revalidateTag('event' + id);
			revalidateTag('events' + type);
		} else {
			revalidateTag('event' + id);
		}
	}
	return redirect(`/${id}`);
}
