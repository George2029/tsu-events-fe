'use client'

import { useFormState } from 'react-dom';
import passwordResetRequest from '@/app/actions/user/passwordResetRequest';

const passwordResetRequestInitialState = {
	email: undefined,
	message: ''
}

export default function ForgotPasswordPage() {

	const [passwordResetRequestState, passwordResetAction] = useFormState(passwordResetRequest, passwordResetRequestInitialState);

	return (
		<div>
			<div>password reset request</div>
			<div className={`${passwordResetRequestState.email === undefined ? 'hidden' : ''}`}>
				message sent to {passwordResetRequestState.email}
			</div>
			<div className={`${passwordResetRequestState.email === undefined ? '' : 'hidden'}`}>
				<form className="space-y-6" action={passwordResetAction} >
					<div>
						<div className="flex items-center justify-between">
							<label htmlFor="username" className="block text-sm font-medium leading-6 ">
								Enter username
							</label>
						</div>
						<div className="mt-2">
							<input
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								required
								className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<div className="p-2">
							{passwordResetRequestState?.email ? passwordResetRequestState.message : passwordResetRequestState.message}
						</div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
