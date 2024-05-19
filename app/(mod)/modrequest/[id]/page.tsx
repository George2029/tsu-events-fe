import EditRequest from '@/app/ui/request/EditRequest';
import { getRequestAsMod } from '@/app/actions/requests/getRequestAsMod';

export default async function ModRequestPage(
	{ params }: { params: { id: string } }) {

	let request = await getRequestAsMod(params.id);

	let {
		id,
		type,
		title,
		location,
		startTime,
		endTime,
		endOfRequestTime,
		status,
		description,
	} = request;

	console.log(request);

	startTime.setMinutes(startTime.getMinutes() - startTime.getTimezoneOffset());
	let normalizedStartTime = startTime.toISOString().slice(0, 16);

	endOfRequestTime.setMinutes(endOfRequestTime.getMinutes() - endOfRequestTime.getTimezoneOffset());
	let normalizedEndOfRequestTime = endOfRequestTime.toISOString().slice(0, 16);

	endTime.setMinutes(endTime.getMinutes() - endTime.getTimezoneOffset());
	let normalizedEndTime = endTime.toISOString().slice(0, 16);

	return (
		<>
			<div className="flex font-bold justify-center text-center text-lg">
				<div>Mod: Edit Request</div>
			</div>
			<EditRequest props={{
				id,
				existingType: type,
				existingTitle: title,
				existingLocation: location,
				existingStatus: status,
				existingEndOfRequestTime: normalizedEndOfRequestTime,
				existingStartTime: normalizedStartTime,
				existingEndTime: normalizedEndTime,
				existingDescription: description,
			}} />
		</>
	)
}
