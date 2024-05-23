import { cookies } from 'next/headers';

export let isRequestOwner = async (id: number): Promise<boolean> => {
	let sid = cookies().get('connect.sid');
	if (!sid) return false;
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/experienced/requests/${id}/isOwner`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});
	return res.ok;
}
