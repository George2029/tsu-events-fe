type UserPreview = {
	hue: number;
	firstName: string;
}

export default async function getUserPreview(userId: number): Promise<UserPreview> {
	let res = await fetch(`http://localhost:3000/users/${userId}/preview`, { cache: 'no-store' });

	let userPreview = await res.json();
	return userPreview;
}
