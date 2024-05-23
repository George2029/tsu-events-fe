import type { Voter } from '@/app/types/voter';

export default async function findAllByRequestId(requestId: number): Promise<Voter[]> {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/votes/request/${requestId}`, { cache: 'no-store' })
	return res.json();
}
