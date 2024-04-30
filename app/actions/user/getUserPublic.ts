import { notFound } from 'next/navigation'

type UserPublic = {
	username: string,
	firstName: string,
	visits: number,
	level: number,
	hue: number,
	wins: number,
	createdAt: Date
}

export default async function getUserPublic(id: string): Promise<UserPublic> {
	if (isNaN(+id)) notFound();
	let res = await fetch(`http://localhost:3000/users/${id}`, { cache: 'no-store' });
	if (!res.ok) notFound();
	let user = await res.json();
	user.createdAt = new Date(user.createdAt);
	return user;

}
