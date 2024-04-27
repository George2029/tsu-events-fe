'use server'

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
	let updateEventDto: UpdateEventDto = {};

	let id = formData.get('id')?.toString();
	console.log(`id: `, id);

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

	let type = formData.get('type')?.toString().trim() as EventType;
	if (type) {
		updateEventDto.type = type;
	}

	let moderator = formData.get('moderator')?.toString().trim();
	if (moderator) {
		updateEventDto.moderator = moderator;
	}

	let placesTotal = Number(formData.get('placesTotal'));
	if (placesTotal) {
		updateEventDto.placesTotal = placesTotal;
	}

	let startTime = formData.get('startTime')?.toString().trim();
	if (startTime) {
		updateEventDto.startTime = new Date(startTime);
	}

	let endTime = formData.get('endTime')?.toString().trim();
	if (endTime) {
		updateEventDto.endTime = new Date(endTime);
	}

	let status = formData.get('status')?.toString().trim() as EventStatus;
	if (status) {
		updateEventDto.status = status;
	}

	let event = plainToInstance(UpdateEventDto, updateEventDto);

	let valid = await validate(event);

	if (valid.length) return { message: JSON.stringify(valid) };
	console.log(event);

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

	let newEvent = await res.json();
	console.log(`updated event: `, newEvent);
	return redirect(`/${id}`);
}
