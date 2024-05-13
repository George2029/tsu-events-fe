import { cookies } from 'next/headers';

export default async function isModOrAdmin() {
	let l = new Promise((res, rej) => setTimeout(() => res(1), 3000));
	await l;
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
