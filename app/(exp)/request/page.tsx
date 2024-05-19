import CreateRequest from '@/app/ui/request/CreateRequest';
import canRequest from '@/app/actions/requests/canRequest'
import { notFound } from 'next/navigation';

export default async function CreateRequestPage() {
	let res = await canRequest();
	if (!res) return notFound();
	return (
		<>
			<div className="flex font-bold justify-center text-center text-lg">
				<div>Create a Request</div>
			</div>
			<CreateRequest />
		</>
	)
}
