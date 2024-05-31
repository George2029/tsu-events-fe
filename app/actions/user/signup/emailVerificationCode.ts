'use server'

export default async function sendVerificationCode(email: string): Promise<boolean> {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/emailVerificationCode`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email
			})
		});

	return res.ok;

}
