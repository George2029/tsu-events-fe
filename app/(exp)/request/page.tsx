import CreateRequest from '@/app/ui/request/CreateRequest';
import canMod from '@/app/actions/moderation/canMod'
import { notFound } from 'next/navigation';


export default async function CreateRequestPage() {
	let res = await canMod();
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
