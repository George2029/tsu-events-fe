import EventsOrRequests from '@/app/ui/EventsOrRequests';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function EventsOrRequestsPage() {
	return <EventsOrRequests props={{ requests: true, eventType: EventType.BOARD_GAMES_EVENT }} />
}
