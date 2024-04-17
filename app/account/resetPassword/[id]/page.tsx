import PasswordResetPage from './PasswordResetPage';
import { notFound } from 'next/navigation';

export default async function ResetPassword({ params }: { params: { id: string } }) {

	let res: any;
	try {
		res = await fetch(`http://localhost:3000/users/resetpw/${params.id}`, { cache: 'no-store' })
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message)
		}
	}
	if (!res.ok) {
		notFound();
	}

	let props = {
		resetId: params.id
	}

	return <PasswordResetPage {...props} />
}
