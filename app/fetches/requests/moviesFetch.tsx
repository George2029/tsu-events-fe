import { EventType } from '@/app/classes/events/enums/eventType.enum';
import Movies from '@/app/ui/requests/Movies';

export default async function FetchPreviews({ props }: { props: { limit?: number } }) {
	let { limit } = props;
	let params: { type?: EventType, limit?: string } = { type: EventType.MOVIE_EVENT };

	if (limit) params.limit = String(limit);

	let url = `http://localhost:3000/requests?` + new URLSearchParams(params);

	let tags = ['movie-requests'];

	const res = await fetch(url, { next: { tags } });

	let data = await res.json(); // 

	return <Movies props={{ limit, data }} />
}
