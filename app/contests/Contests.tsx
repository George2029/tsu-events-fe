import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';

export default async function BoardGames() {
	let contests = await getEventsOrRequestsPreviewData({ eventType: EventType.CONTEST_EVENT });
	return contests.map((contest) => <EventAndRequestPreviewCard key={contest.id} props={{ eventOrRequestPreview: { ...contest } }} />)
}
