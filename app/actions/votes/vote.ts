'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CreateVoteDto } from '@/app/classes/votes/dto/create-vote.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export default async function vote(requestId: number, value: boolean): Promise<boolean> {
	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');
	let convertedDto = plainToInstance(CreateVoteDto, { requestId, value });
	let valid = await validate(convertedDto);
	console.log(valid);

	let res = await fetch(`http://localhost:3000/votes`, {
		method: 'POST',
		headers: {
			'Cookie': `${sid.name}=${sid.value}`,
			"Content-type": 'application/json'
		},
		body: JSON.stringify(convertedDto)
	});

	if (!res.ok) {
		let ans = await res.json();
		console.log(ans);
		redirect('/signin');
	}

	redirect(`/requests/${requestId}`);
}
