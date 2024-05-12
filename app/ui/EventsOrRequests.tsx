import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';
import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';

export default async function({ props }: { props: { requests?: boolean, eventType?: EventType } }) {
	let { requests, eventType } = props;
	let EvsOrReqs = await getEventsOrRequestsPreviewData({ requests, eventType });
	return EvsOrReqs.map((eventOrRequestPreviewData) => <EventAndRequestPreviewCard key={eventOrRequestPreviewData.id} props={{ requests, eventOrRequestPreview: { ...eventOrRequestPreviewData } }} />)
}
