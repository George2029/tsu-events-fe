import { cookies } from 'next/headers';

export default async function isModOrAdmin() {
	let sid = cookies().get('connect.sid');
	if (!sid) return false;
	let res = await fetch('http://localhost:3000/mod/users/',
		{
			cache: 'no-store',
			headers: {
				Cookie: `${sid.name}=${sid.value}`
			}
		});
	if (!res.ok) return false;
	return true;
}
