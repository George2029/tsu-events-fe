import { notFound } from 'next/navigation'
import { cookies } from 'next/headers';
import EditUserUI from '@/app/ui/user/EditUser';
import type { User } from '@/app/types/user/user';
import canMod from '@/app/actions/moderation/canMod';

export default async function ModUserPage({ params }: { params: { id: string } }) {

	let sid = cookies().get('connect.sid');
	if (!sid) notFound();

	let isMod = await canMod();
	if (!isMod) notFound();

	let id = +params.id;
	if (isNaN(id)) notFound();

	let req = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/mod/users/${params.id}`, {
		cache: 'no-store',
		headers: {
			Cookie: `connect.sid=${sid.value}`
		}
	});

	if (!req.ok) {
		notFound()
	}

	let user = await req.json() as User;

	let { username } = user;

	let existingValues = {
		visits: user.visits,
		level: user.level,
		wins: user.wins,
		role: user.role,
		status: user.status
	};

	console.log(existingValues);

	return (
		<div>
			<div className="">Edit {username}</div>
			<EditUserUI props={{ existingValues, id }} />
		</div>
	)


}
