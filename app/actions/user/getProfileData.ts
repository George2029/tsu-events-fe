import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import type { UserSession } from '@/app/types/user/userSession.type';

export default async function getProfileData(): Promise<UserSession> {
	let sid = cookies().get('connect.sid');
	if (!sid) {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}

	let response = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/user`, {
		cache: 'no-store',
		headers: {
			Cookie: `${sid.name}=${sid.value}`
		}
	});

	if (response.ok) {
		let user = await response.json();
		user.createdAt = new Date(user.createdAt);
		return user;
	} else {
		redirect(`https://${process.env.DOMAIN_NAME}/signin`);
	}


}
