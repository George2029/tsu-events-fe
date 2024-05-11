import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';
import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';

export default async function Requests() {
	let requests = await getEventsOrRequestsPreviewData({ requests: true });

	return requests.map(req => <EventAndRequestPreviewCard key={req.id} props={{ eventOrRequestPreview: { ...req } }} />)
}
