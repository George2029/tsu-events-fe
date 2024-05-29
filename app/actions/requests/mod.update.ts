'use server'

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { RequestStatus } from '@/app/classes/requests/enums/requestStatus.enum';
import { revalidateTag } from 'next/cache';

import { UpdateRequestDto } from '@/app/classes/requests/dto/update-request.dto';

type PrevState = {
	message: string;
}

export default async function modUpdateRequest(prevState: PrevState, formData: FormData): Promise<PrevState> {

	let sid = cookies().get('connect.sid');
	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let id = String(formData.get('id'));

	let previousType = formData.get('previousType');

	let title = String(formData.get('title')).trim();
	let location = String(formData.get('location')).trim();
	let description = formData.get('description');
	let status = formData.get('status') as RequestStatus | undefined;
	let endOfRequestTime = new Date(String(formData.get('endOfRequestTime')));
	let type = formData.get('type') as EventType | undefined;
	let startTime = new Date(String(formData.get('startTime')));
	let endTime = new Date(String(formData.get('endTime')));

	let updateRequestDto: UpdateRequestDto = {};

	if (!isNaN(endOfRequestTime.getTime())) {
		updateRequestDto.endOfRequestTime = endOfRequestTime;
	}

	if (status) {
		updateRequestDto.status = status;
	}

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

	console.log(`modUpdateRequestDto: `, updateRequestDto);

	let request = plainToInstance(UpdateRequestDto, updateRequestDto);
	let valid = await validate(request);

	if (valid.length) {
		console.log(`mod update data is invalid: `, valid);
		return { message: String(valid[0]) };
	}

	if (!Object.keys(updateRequestDto).length) {
		console.log('no update bc dto is empty');
		redirect(`https://${process.env.DOMAIN_NAME}/requests/` + id);
	}

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/mod/requests/${id}`, {
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

	console.log(`moderator has updated the request: `, newRequest);


	if (type !== previousType) {
		revalidateTag('request' + id);
		revalidateTag('requests' + type);
		revalidateTag('requests' + previousType); // if type is changed, then route with events of the previous type has to be revalidated as well.
	} else {
		if (title || startTime || location || status) {
			revalidateTag('request' + id);
			revalidateTag('requests' + type);
		} else {
			revalidateTag('request' + id);
		}
	}

	redirect(`https://${process.env.DOMAIN_NAME}/requests/` + id);

}
