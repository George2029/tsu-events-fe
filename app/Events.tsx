import EventPreviewCard from '@/app/ui/events/EventPreviewCard';
import getAllEvents from '@/app/actions/events/getAllEvents';

export default async function Events() {
	const events = await getAllEvents();
	return events.map((event) => <EventPreviewCard key={event.id} {...event} />)

}
