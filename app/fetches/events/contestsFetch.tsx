import { EventType } from '@/app/classes/events/enums/eventType.enum';
import Contests from '@/app/ui/events/Contests';

export default async function FetchContests({ props }: { props: { limit?: number } }) {
	let { limit } = props;

	let params: { type: EventType, limit?: string } = { type: EventType.CONTEST_EVENT };

	if (limit) params.limit = String(limit);

	let url = `http://localhost:3000/events?` + new URLSearchParams(params);

	let tags = ['contest-events'];

	const res = await fetch(url, { next: { tags } });

	let data = await res.json(); // 


	return <Contests props={{ limit, data, }} />
}
