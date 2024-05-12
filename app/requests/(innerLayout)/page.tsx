import EventsOrRequests from '@/app/ui/EventsOrRequests';

export default async function RequestsPage() {
	return <EventsOrRequests props={{ requests: true }} />
}
