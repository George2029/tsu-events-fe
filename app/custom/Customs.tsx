import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';

export default async function Movies() {
	let customs = await getEventsOrRequestsPreviewData({ eventType: EventType.CUSTOM_EVENT });
	return customs.map((custom) => <EventAndRequestPreviewCard key={custom.id} props={{ eventOrRequestPreview: { ...custom } }} />)
}
