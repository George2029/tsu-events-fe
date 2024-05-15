import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import EventsOrRequests from '@/app/ui/EventsOrRequests';

export default async function FetchPreviews({ props }: { props: { requests?: boolean, eventType?: EventType } }) {
	let { requests, eventType } = props;
	let t1 = performance.now();
	let data = await getEventsOrRequestsPreviewDataWithOwnerData({ requests, eventType }); // <=30 events or requests, 0 offset
	let t2 = performance.now();

	console.log(`fetch separately: `, t2 - t1);

	return <EventsOrRequests props={{ requests, data, eventType }} />
}
