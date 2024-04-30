import EditRequest from '@/app/ui/requests/EditRequest';
import { notFound } from 'next/navigation'
import { plainToInstance } from 'class-transformer';
import { Request } from '@/app/classes/requests/request';

export default async function RequestPage(
	{ params }: { params: { id: string } }) {

	if (isNaN(+params.id)) notFound();
	let res = await fetch(`http://localhost:3000/requests/${params.id}`, { cache: 'no-store' });

	if (!res.ok) notFound()

	let requestJson = await res.json();
	let request = plainToInstance(Request, requestJson);
	if (!(request instanceof Request)) notFound();
	let {
		id,
		type,
		title,
		location,
		startTime,
		endTime,
		description,
	} = request;
	startTime = new Date(startTime);
	endTime = new Date(endTime);

	console.log(request);

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
