import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';
import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';

export default async function Events() {
	const events = await getEventsOrRequestsPreviewData();
	return events.map((event) => {
		let { id, userId, title, type, location, startTime, createdAt } = event;
		let eventOrRequestPreview = { id, userId, title, type, location, startTime, createdAt };
		return <EventAndRequestPreviewCard key={event.id} props={{ eventOrRequestPreview }} />
	}
	);

}
