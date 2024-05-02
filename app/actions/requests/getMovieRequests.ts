import { plainToInstance } from 'class-transformer';
import { RequestPreview } from '@/app/classes/requests/request';

export let getMovieRequests = async (): Promise<RequestPreview[]> => {
	const res = await fetch(`http://localhost:3000/requests/movies`, {
		cache: 'no-store'
	});

	let requestsJSON = await res.json();
	return requestsJSON.map((r: any) => plainToInstance(RequestPreview, r));
}

