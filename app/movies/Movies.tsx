import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';

export default async function Movies() {
	let movies = await getEventsOrRequestsPreviewData({ eventType: EventType.MOVIE_EVENT });
	return movies.map((movie) => <EventAndRequestPreviewCard key={movie.id} props={{ eventOrRequestPreview: { ...movie } }} />)
}
