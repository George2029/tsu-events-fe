import getAllEvents from '@/app/actions/events/getAllEvents';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventPreviewCard from '@/app/ui/events/EventPreviewCard';

export default async function BoardGames() {
	let contests = await getAllEvents(EventType.CONTEST_EVENT);
	return contests.map((contest) => <EventPreviewCard key={contest.id} {...contest} />)
}
