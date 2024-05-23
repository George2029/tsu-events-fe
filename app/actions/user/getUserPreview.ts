'use server'

type UserPreview = {
	hue: number;
	firstName: string;
}

export default async function getUserPreview(userId: number): Promise<UserPreview> {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/${userId}/preview`, { cache: 'no-store' });

	return res.json();
}
