import { EventType } from '@/app/classes/events/enums/eventType.enum';
import Contests from '@/app/ui/requests/Contests';

export default async function FetchContestRequests({ props }: { props: { limit?: number } }) {
	let { limit } = props;

	let params: { type?: EventType, limit?: string } = { type: EventType.CONTEST_EVENT };

	if (limit) params.limit = String(limit);

	let url = `http://localhost:3000/requests?` + new URLSearchParams(params);

	let tags = ['contest-requests'];

	const res = await fetch(url, { next: { tags } });

	let data = await res.json(); // 

	return <Contests props={{ limit, data }} />
}
