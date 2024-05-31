import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
	console.log(`middleware`);
	let sid = request.cookies.get('connect.sid');
	if (!sid) {
		return NextResponse.redirect(`https://${process.env.DOMAIN_NAME}/signin`)
	}

	let userSessionExists = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user/sessionExists`, {
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});
	if (!userSessionExists.ok) {
		console.log('token got expired');
		let response = NextResponse.redirect(`https://${process.env.DOMAIN_NAME}/signin`);
		response.cookies.delete('connect.sid');
		return response;
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/account', '/account/settings'],
}
