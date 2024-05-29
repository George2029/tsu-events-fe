'use server'

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { revalidateTag } from 'next/cache';

import { CreateRequestDto } from '@/app/classes/requests/dto/create-request.dto';

type PrevState = {
	message: string;
}

export default async function createEvent(prevState: PrevState, formData: FormData) {

	let sid = cookies().get('connect.sid');
	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let title = formData.get('title')?.toString().trim() as string;
	let location = formData.get('location')?.toString().trim() as string;
	let description = formData.get('description')?.toString().trim();
	let type = formData.get('type') as EventType;
	let startTime = new Date(String(formData.get('startTime')));
	let endTime = new Date(String(formData.get('endTime')));

	let data: CreateRequestDto = { title, location, type, startTime, endTime };
	if (description) {
		data.description = description;
	}

	let request = plainToInstance(CreateRequestDto, data);
	let valid = await validate(request);

	if (valid.length) return { message: valid.toString() };

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/experienced/requests`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			Cookie: `${sid.name}=${sid.value}`
		},
		body: JSON.stringify(request)
	});

	if (!res.ok) {
		let resJSON = await res.json();
		return {
			message: resJSON
		}
	}

	let newRequest = await res.json();
	console.log(`a new request has been created: `, newRequest);

	revalidateTag('requests');
	revalidateTag('requests' + type);

	redirect(`https://${process.env.DOMAIN_NAME}/requests/` + newRequest.id);

}
