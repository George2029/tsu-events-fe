'use server'

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

import { UpdateRequestDto } from '@/app/classes/requests/dto/experienced.update-request.dto';

type PrevState = {
	message: string;
}

export default async function updateEvent(prevState: PrevState, formData: FormData) {

	let sid = cookies().get('connect.sid');
	if (!sid) return redirect('/signin');

	let id = String(formData.get('id'));
	let title = String(formData.get('title')).trim();
	let location = String(formData.get('location')).trim();
	let description = formData.get('description');
	let type = formData.get('type') as EventType | undefined;
	let startTime = new Date(String(formData.get('startTime')));
	let endTime = new Date(String(formData.get('endTime')));

	let updateRequestDto: UpdateRequestDto = {};

	if (title) {
		updateRequestDto.title = title;
	}

	if (location) {
		updateRequestDto.location = location;
	}

	if (type) {
		updateRequestDto.type = type;
	}

	if (startTime) {
		updateRequestDto.startTime = startTime;
	}

	if (endTime) {
		updateRequestDto.endTime = endTime;
	}

	if (description === 'null') {
		updateRequestDto.description = null;
	} else if (description) {
		updateRequestDto.description = String(description);
	}

	console.log(updateRequestDto);

	let request = plainToInstance(UpdateRequestDto, updateRequestDto);
	let valid = await validate(request);

	if (valid.length) return { message: JSON.stringify(valid) };

	let res = await fetch(`http://localhost:3000/experienced/requests/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
			Cookie: `${sid.name}=${sid.value}`
		},
		body: JSON.stringify(request)
	});

	if (!res.ok) {
		let resJSON = await res.json();
		return {
			message: JSON.stringify(resJSON)
		}
	}

	let newRequest = await res.json();
	console.log(newRequest);

	return {
		message: 'all good'
	}

}
