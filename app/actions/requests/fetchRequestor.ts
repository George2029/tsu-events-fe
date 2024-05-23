export default async function fetchRequestor(userId: number) {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/${userId}/requestor`, { cache: 'no-store' });
	let requestorData = await res.json();
	return requestorData;
}
