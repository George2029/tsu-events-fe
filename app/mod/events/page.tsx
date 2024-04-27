import Link from 'next/link';

export default function ModEventsPage() {
	return (
		<div className="space-y-2">
			<Link href="/mod/events/create"><div>Create Event</div></Link>
			<Link href="/mod/events/edit"><div>Edit Event</div></Link>
		</div>
	)
}
