import { notFound } from 'next/navigation'
import { cookies } from 'next/headers';
import { Request } from '@/app/classes/requests/request';
import { plainToInstance } from 'class-transformer';

export let getRequestAsOwner = async (id: string): Promise<Request> => {

	if (isNaN(+id)) notFound();
	let sid = cookies().get('connect.sid');
	if (!sid) notFound();

	let res = await fetch(`http://localhost:3000/experienced/requests/${+id}`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});

	if (!res.ok) {
		let response = await res.json();
		console.log(`getRequest as Owner has failed: `, response);
		notFound()

	}
	let req = plainToInstance(Request, await res.json());
	if (req instanceof Request) return req;
	throw Error('fetched request has wrong type');
}
