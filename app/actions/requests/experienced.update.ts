'use server'

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { revalidateTag } from 'next/cache';

import { ExperiencedUpdateRequestDto } from '@/app/classes/requests/dto/experienced.update-request.dto';

type PrevState = {
	message: string;
}

export default async function experiencedUpdateRequest(prevState: PrevState, formData: FormData) {

	let sid = cookies().get('connect.sid');
	if (!sid) return redirect('/signin');

	let id = String(formData.get('id'));

	let previousType = formData.get('previousType');

	let title = String(formData.get('title')).trim();
	let location = String(formData.get('location')).trim();
	let description = formData.get('description');
	let type = formData.get('type') as EventType | undefined;
	let startTime = new Date(String(formData.get('startTime')));
	let endTime = new Date(String(formData.get('endTime')));

	let updateRequestDto: ExperiencedUpdateRequestDto = {};

	if (title) {
		updateRequestDto.title = title;
	}

	if (location) {
		updateRequestDto.location = location;
	}

	if (type) {
		updateRequestDto.type = type;
	}

	if (!isNaN(startTime.getTime())) {
		updateRequestDto.startTime = startTime;
	}

	if (!isNaN(endTime.getTime())) {
		updateRequestDto.endTime = endTime;
	}

	if (description === 'null') {
		updateRequestDto.description = null;
	} else if (description) {
		updateRequestDto.description = String(description);
	}

	console.log(updateRequestDto);
	if (!Object.keys(updateRequestDto).length) {
		console.log('redirect bc of empty dto');
		redirect('/requests/' + id);
	}

	let request = plainToInstance(ExperiencedUpdateRequestDto, updateRequestDto);
	let valid = await validate(request);

	if (valid.length) {
		console.log(`requestor edit attempt has failed due to invalid data: `, valid);
		return { message: valid[0] };
	}


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

	console.log(`experienced user has updated their request: `, newRequest);


	if (type !== previousType) {
		revalidateTag('request' + id);
		revalidateTag('requests' + type);
		revalidateTag('requests' + previousType); // if type is changed, then route with events of the previous type has to be revalidated as well.
	} else {
		if (title || startTime || location) {
			revalidateTag('request' + id);
			revalidateTag('requests' + type);
		} else {
			revalidateTag('request' + id);
		}
	}

	redirect('/requests/' + id);

}
