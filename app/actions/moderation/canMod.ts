import { cookies } from 'next/headers';

export default async function isModOrAdmin(): Promise<boolean> {
	await new Promise((res) => setTimeout(() => res(1), 1000));
	console.log(`canMod: delayed by 1s`);

	let sid = cookies().get('connect.sid');
	if (!sid) return false;

	let res = await fetch('http://localhost:3000/mod',
		{
			cache: 'no-store',
			headers: {
				Cookie: `${sid.name}=${sid.value}`
			}
		});

	return res.ok;
}
