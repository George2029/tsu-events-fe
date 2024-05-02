import { cookies } from 'next/headers';

export let isRequestOwner = async (id: number): Promise<boolean> => {
	let sid = cookies().get('connect.sid');
	if (!sid) return false;
	let res = await fetch(`http://localhost:3000/requests/${id}/isOwner`, {
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});
	return res.ok;
}
