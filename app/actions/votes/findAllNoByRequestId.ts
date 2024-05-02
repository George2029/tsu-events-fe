import type { Voter } from '@/app/types/voter';

export default async function findAllNoByRequestId(requestId: number): Promise<Voter[]> {
	let res = await fetch(`http://localhost:3000/votes/request/${requestId}/no`, { cache: 'no-store' })
	return res.json();
}
