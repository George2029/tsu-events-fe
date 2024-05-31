import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

	let sid = cookies().get('connect.sid');
	console.log(sid);
	console.log(request.cookies.get('connect.sid'));

	if (!sid) {
		console.log(`redirect bc of absense of sid`);
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});

	console.log(`response ok: `, res.ok);

	if (res.ok) {
		let user = await res.json();
		console.log(user);
		return Response.json({ user })
	} else {
		cookies().delete('connect.sid');
		return NextResponse.redirect(`https://${process.env.DOMAIN_NAME}`);
	}

}

/*
 *

		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
		*/
