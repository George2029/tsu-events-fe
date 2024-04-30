export default async function fetchRequestor(userId: number) {
	let res = await fetch(`http://localhost:3000/users/${userId}/requestor`, { cache: 'no-store' });
	let requestorData = await res.json();
	return requestorData;
}
