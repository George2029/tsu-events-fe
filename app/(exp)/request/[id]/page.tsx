import EditRequest from '@/app/ui/request/EditRequest';
import { getRequestAsOwner } from '@/app/actions/requests/getRequestAsOwner';

export default async function RequestPage(
	{ params }: { params: { id: string } }) {

	let request = await getRequestAsOwner(params.id);

	let {
		id,
		type,
		title,
		location,
		startTime,
		endTime,
		description,
	} = request;

	startTime.setMinutes(startTime.getMinutes() - startTime.getTimezoneOffset());
	let normalizedStartTime = startTime.toISOString().slice(0, 16);

	endTime.setMinutes(endTime.getMinutes() - endTime.getTimezoneOffset());
	let normalizedEndTime = endTime.toISOString().slice(0, 16);

	return (
		<>
			<div className="flex font-bold justify-center text-center text-lg">
				<div>Edit a request</div>
			</div>
			<EditRequest props={{
				id,
				existingType: type,
				existingTitle: title,
				existingLocation: location,
				existingStartTime: normalizedStartTime,
				existingEndTime: normalizedEndTime,
				existingDescription: description,
			}} />
		</>
	)
}
