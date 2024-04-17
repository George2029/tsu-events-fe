'use server'

export default async function resetPassword(prevState: any, formData: FormData) {

	let id = formData.get('id');

	if (!id?.toString().trim()) throw new Error;

	let password = formData.get('password')?.toString().trim();
	let password2 = formData.get('password2')?.toString().trim();

	if (!password || !password2) {
		return {
			message: 'passwords should not be empty'
		}
	}

	if (password !== password2) {
		return {
			message: 'passwords should be equal'
		}
	}

	let strengthCheckRegex = /^(?=.*[A-Z])(?=.*[!@#\-$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

	if (!password.match(strengthCheckRegex)) {
		return {
			message: 'password should contain at least 1 special symbol, 1 capital latin letter, 1 digit, 1 lowercase latin letter, and be at least 8 characters'
		}
	}

	let res: any;

	try {
		res = await fetch('http://localhost:3000/users/resetpw',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					password: password
				})
			})
	} catch (error) {
		console.log(error);
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}

	let resJson: any;

	if (!res.ok) {
		resJson = await res.json();
		console.log(resJson);
		return {
			status: false,
			message: JSON.stringify(resJson)
		}
	} else {
		return {
			status: true,
			message: ''
		}
	}

}
