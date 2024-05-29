'use server'

export default async function isUsernameFree(username: string): Promise<boolean | void> {
	console.log('isUsernameFree');
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/usernameExists/${username}`);

	return !res.ok;
}
