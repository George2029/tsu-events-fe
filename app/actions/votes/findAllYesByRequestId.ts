import type { Voter } from '@/app/types/voter';

export default async function findAllYesByRequestId(requestId: number): Promise<Voter[]> {
	let res = await fetch(`http://localhost:3000/votes/request/${requestId}/yes`, { cache: 'no-store' })
	return res.json();
}
