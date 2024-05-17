import Events from '@/app/ui/Events';

export default async function FetchAllEvents({ props }: { props: { limit?: number } }) {
	let { limit } = props;

	let params: { limit?: string } = {};
	if (limit) params.limit = String(limit);
	let url = `http://localhost:3000/events?` + new URLSearchParams(params);
	const res = await fetch(url, { cache: 'no-store' });
	let data = await res.json(); // 

	return <Events props={{ limit, data }} />
}
