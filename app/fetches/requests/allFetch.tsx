import Requests from '@/app/ui/Requests';

export default async function FetchPreviews({ props }: { props: { limit?: number } }) {
	let { limit } = props;
	let params: { limit?: string } = {};

	if (limit) params.limit = String(limit);
	let url = `http://localhost:3000/requests?` + new URLSearchParams(params);
	console.time(`reqFetch`);
	const res = await fetch(url, { cache: 'no-store' });
	let data = await res.json(); // 
	console.timeEnd(`reqFetch`);

	return <Requests props={{ limit, data }} />
}
