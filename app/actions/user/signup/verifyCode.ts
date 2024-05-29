'use server'


export default async function verifyCode(email: string, code: string): Promise<boolean> {

	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/verifyCode`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			code
		})
	});

	if (!res.ok) {
		console.log(`code verification FAILED: `, await res.json());
	}

	return res.json();
}
