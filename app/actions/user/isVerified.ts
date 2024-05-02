import { cookies } from 'next/headers';

export default async function isVerified(): Promise<boolean> {
	let sid = cookies().get('connect.sid');
	if (!sid) return false;
	let res = await fetch(`http://localhost:3000/users/isVerified`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});
	return res.ok;
}
