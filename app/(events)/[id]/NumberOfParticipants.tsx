import countAllParticipants from '@/app/actions/events/event/countAllParticipants';

export default async function NumberOfParticipants({ props }: { props: { eventId: number } }) {

	let { eventId } = props;
	let count = await countAllParticipants(eventId);
	return count;
}
