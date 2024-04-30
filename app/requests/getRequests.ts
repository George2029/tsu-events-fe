import { plainToInstance } from 'class-transformer';
import { RequestPreview } from '@/app/classes/requests/request';

export let getRequests = async (): Promise<RequestPreview[]> => {
	const res = await fetch(`http://localhost:3000/requests`, {
		cache: 'no-store'
	});

	let requestsJSON = await res.json();
	return requestsJSON.map((r: any) => plainToInstance(RequestPreview, r));
}

