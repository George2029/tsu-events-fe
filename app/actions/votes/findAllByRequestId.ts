import type { Voter } from '@/app/types/voter';

export default async function findAllByRequestId(requestId: number): Promise<Voter[]> {
	let res = await fetch(`http://localhost:3000/votes/request/${requestId}`, { cache: 'no-store' })
	return res.json();
}
