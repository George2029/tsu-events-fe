'use server'

export default async function sendVerificationCode(email: string): Promise<void> {
	await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/emailVerificationCode`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email
			})
		});
}
