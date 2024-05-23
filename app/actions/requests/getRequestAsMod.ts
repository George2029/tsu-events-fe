import { notFound } from 'next/navigation'
import { cookies } from 'next/headers';
import { Request } from '@/app/classes/requests/request';
import { plainToInstance } from 'class-transformer';

export let getRequestAsMod = async (id: string): Promise<Request> => {

	if (isNaN(+id)) notFound();
	let sid = cookies().get('connect.sid');
	if (!sid) notFound();

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/mod/requests/${id}`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});

	if (!res.ok) {
		let response = await res.json();
		console.log(`getRequest as Mod has failed: `, response);
		notFound()
	}
	let data = plainToInstance(Request, await res.json());
	if (data instanceof Request) return data;
	throw Error('fetched request has wrong type');
}
