import { EventType } from '@/app/classes/events/enums/eventType.enum';
import Customs from '@/app/ui/events/Customs';

export default async function FetchCustoms({ props }: { props: { limit?: number } }) {
	let { limit } = props;
	let params: { type: EventType, limit?: string } = { type: EventType.CUSTOM_EVENT };
	if (limit) params.limit = String(limit);
	let url = `http://localhost:3000/events?` + new URLSearchParams(params);
	let tags = ['custom-events'];
	const res = await fetch(url, { next: { tags } });
	let data = await res.json(); // 


	return <Customs props={{ limit, data, }} />
}
