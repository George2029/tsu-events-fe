'use server'

type PrevState = {
	message: string
}

export default async function passwordResetRequest(prevState: PrevState, formData: FormData): Promise<PrevState> {

	let email = formData.get('email') && String(formData.get('email')).trim();

	if (!email) {
		return {
			message: 'email should not be empty'
		}
	}

	let res: any;

	try {
		res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/users/resetPasswordRequest`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
				})
			})
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	let resJson: any;

	if (!res.ok) {
		resJson = await res.json();
		console.log(`RESET REQUEST FAILED: `, resJson);
	}

	return {
		message: 'message was sent to the specified email address, if a user with such email exists'
	};

}
