import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import EventsOrRequests from '@/app/ui/EventsOrRequests';

export default async function FetchPreviews({ props }: { props: { requests?: boolean, eventType?: EventType } }) {
	let { requests, eventType } = props;
	let data = await getEventsOrRequestsPreviewDataWithOwnerData({ requests, eventType });
	return <EventsOrRequests props={{ requests, data, eventType }} />
}
