import Request from '@/app/ui/requests/Request';

export default function RequestPage() {
	return (
		<>
			<div className="flex font-bold justify-center text-center text-lg">
				<div>Request an event</div>
			</div>
			<Request />
		</>
	)
}
