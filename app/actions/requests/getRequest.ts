import { notFound } from 'next/navigation'
import { plainToInstance } from 'class-transformer';
import { Request } from '@/app/classes/requests/request';

export let getRequest = async (id: string): Promise<Request> => {

	if (isNaN(+id)) notFound();

	let res = await fetch(`http://localhost:3000/requests/${+id}`, { cache: 'no-store' });

	if (!res.ok) notFound()
	let requestJson = await res.json();
	let request = plainToInstance(Request, requestJson);
	if (!(request instanceof Request)) {
		console.log(`fetched request doesn't match the stored type`);
		notFound();
	}
	return request;
}
