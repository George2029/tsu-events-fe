import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';

export default async function Requests() {
	let requests = await getEventsOrRequestsPreviewData({ requests: true, eventType: EventType.MOVIE_EVENT });

	return requests.map(req => <EventAndRequestPreviewCard key={req.id} props={{ eventOrRequestPreview: { ...req } }} />)
}
