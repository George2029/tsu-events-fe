import FetchPreviews from '@/app/fetches/FetchPreviews';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function EventsOrRequestsPage() {
	return <FetchPreviews props={{ requests: true, eventType: EventType.CONTEST_EVENT }} />
}
