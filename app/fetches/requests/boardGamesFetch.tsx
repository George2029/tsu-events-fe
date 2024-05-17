import { EventType } from '@/app/classes/events/enums/eventType.enum';
import BoardGames from '@/app/ui/requests/BoardGames';

export default async function FetchPreviews({ props }: { props: { limit?: number } }) {
	let { limit } = props;

	let params: { type?: EventType, limit?: string } = { type: EventType.BOARD_GAMES_EVENT };

	if (limit) params.limit = String(limit);

	let url = `http://localhost:3000/requests?` + new URLSearchParams(params);

	let tags = ['bg-requests'];

	const res = await fetch(url, { next: { tags } });

	let data = await res.json(); // 

	return <BoardGames props={{ limit, data }} />
}
