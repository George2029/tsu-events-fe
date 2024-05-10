import getAllEvents from '@/app/actions/events/getAllEvents';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import EventPreviewCard from '@/app/ui/events/EventPreviewCard';

export default async function BoardGames() {
	let boardgames = await getAllEvents(EventType.BOARD_GAMES_EVENT);
	return boardgames.map((boardgame) => <EventPreviewCard key={boardgame.id} {...boardgame} />)
}
