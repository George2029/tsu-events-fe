'use client'

import { useFormState } from 'react-dom';
import Link from 'next/link';

import resetPassword from '@/app/actions/user/resetPassword';

const passwordFormInitialState = {
	status: false,
	message: 'should contain at least 1 latin letter, digit, special character'
}

export default function PasswordResetPage({ ...props }) {

	let { resetId } = props;

	const [resetPasswordState, resetPasswordAction] = useFormState(resetPassword, passwordFormInitialState);

	return (
		<div className="mt-4 w-full">
			<div className={`${resetPasswordState.status ? '' : 'hidden'}`}>
				<div>password successfully updated</div>
				<Link href="/signin">log-in</Link>
			</div>
			<form className={`space-y-6 ${resetPasswordState.status ? 'hidden' : ''}`} action={resetPasswordAction} >
				<input
					id="id"
					name="id"
					type="hidden"
					value={resetId}
				/>
				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="password" className="block text-sm font-medium leading-6 ">
							New Password
						</label>
					</div>
					<div className="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="password"
							required
							className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="password2" className="block text-sm font-medium leading-6 ">
							New password again
						</label>
					</div>
					<div className="mt-2">
						<input
							id="password2"
							name="password2"
							type="password"
							autoComplete="password"
							required
							className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="p-2">
						{resetPasswordState?.message}
					</div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Update
					</button>
				</div>
			</form>

		</div>
	)
}
