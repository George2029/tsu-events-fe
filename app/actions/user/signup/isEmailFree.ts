'use server'

export default async function isEmailFree(email: string): Promise<boolean | void> {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/emailExists/${email}`);
	return !res.ok;
}
