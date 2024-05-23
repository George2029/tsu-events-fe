import { cookies } from 'next/headers';

export default async function isVerified(): Promise<boolean> {
	let sid = cookies().get('connect.sid');
	if (!sid) return false;
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/isVerified`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});
	return res.ok;
}
