import getAllEvents from '@/app/actions/events/getAllEvents';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventPreviewCard from '@/app/ui/events/EventPreviewCard';

export default async function Movies() {
	let customs = await getAllEvents(EventType.CUSTOM_EVENT);
	return customs.map((custom) => <EventPreviewCard key={custom.id} {...custom} />)
}
