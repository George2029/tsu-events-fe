import getAllEvents from '@/app/actions/events/getAllEvents';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventPreviewCard from '@/app/ui/events/EventPreviewCard';

export default async function Movies() {
	let movies = await getAllEvents(EventType.MOVIE_EVENT);
	return movies.map((movie) => <EventPreviewCard key={movie.id} {...movie} />)
}
