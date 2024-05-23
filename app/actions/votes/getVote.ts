import { cookies } from 'next/headers';

type Vote = {
	value: boolean
}

export default async function getVote(requestId: number): Promise<Vote | null> {
	let sid = cookies().get('connect.sid');
	if (!sid) return null;
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/votes/voter/${requestId}`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});
	if (!res.ok) return null;
	return res.json();
}
