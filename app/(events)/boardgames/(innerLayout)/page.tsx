import EventsOrRequests from '@/app/ui/EventsOrRequests';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function RequestsPage() {
	return <EventsOrRequests props={{ eventType: EventType.BOARD_GAMES_EVENT }} />
}
