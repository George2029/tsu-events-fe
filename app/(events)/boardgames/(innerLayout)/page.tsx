import { EventType } from '@/app/classes/events/enums/eventType.enum';
import FetchPreviews from '@/app/fetches/FetchPreviews';

export default async function RequestsPage() {
	return <FetchPreviews props={{ eventType: EventType.BOARD_GAMES_EVENT }} />
}
