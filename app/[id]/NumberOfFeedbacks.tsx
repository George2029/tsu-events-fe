import countAllFeedbacks from '@/app/actions/events/event/countAllFeedbacks';

export default async function AmountOfConfigs({ props }: { props: { eventId: number } }) {
	let { eventId } = props;
	let result = await countAllFeedbacks(eventId);
	return result
}
