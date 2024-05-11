import getEventsOrRequestsPreviewData from '@/app/actions/getEventsOrRequestsPreviewData';
import EventAndRequestPreviewCard from '@/app/ui/EventAndRequestPreviewCard';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function BoardGames() {
	let boardgames = await getEventsOrRequestsPreviewData({ eventType: EventType.BOARD_GAMES_EVENT });
	return boardgames.map((boardgame) => <EventAndRequestPreviewCard key={boardgame.id} props={{ eventOrRequestPreview: { ...boardgame } }} />)
}
