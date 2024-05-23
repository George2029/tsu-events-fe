import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function VerifyPage({ params }: { params: { uuid: string } }
) {

	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/verify/${params.uuid}`, {
		method: 'POST',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});
	if (!res.ok) {
		let json = await res.json();
		console.log(json);
		redirect('/signin');
	} else {
		redirect('/account');
	}


}
