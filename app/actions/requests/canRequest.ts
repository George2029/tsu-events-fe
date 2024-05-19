import { cookies } from 'next/headers';

export default async function() {
	let sid = cookies().get('connect.sid');
	if (!sid) return false;

	let res = await fetch(`http://localhost:3000/experienced`, {
		headers: {
			'Cookie': `${sid.name}: ${sid.value}`
		}
	});
	return res.ok;
}
