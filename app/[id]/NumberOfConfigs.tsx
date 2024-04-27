import countAllConfigs from '@/app/actions/events/event/countAllConfigs';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default async function AmountOfConfigs({ props }: { props: { eventId: number, type: EventType } }) {
	let { eventId, type } = props;
	let result = await countAllConfigs(eventId, type);
	return result
}
