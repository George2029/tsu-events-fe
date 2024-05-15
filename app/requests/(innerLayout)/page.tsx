import FetchPreviews from '@/app/fetches/FetchPreviews';

export default async function RequestsPage() {
	return <FetchPreviews props={{ requests: true }} />
}
