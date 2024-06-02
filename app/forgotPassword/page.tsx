'use client'

import { useFormState } from 'react-dom';
import passwordResetRequest from '@/app/actions/user/passwordResetRequest';
import Back from '@/app/ui/buttons/Back';

const passwordResetRequestInitialState = {
	message: ''
}

export default function ForgotPasswordPage() {

	const [passwordResetRequestState, passwordResetAction] = useFormState(passwordResetRequest, passwordResetRequestInitialState);

	return (
		<div className="px-5 max-w-80 mt-16 md:mt-10">
			<h1 className="text-xl font-bold text-center">Password Reset Request</h1>
			<div className="mt-10">
				{passwordResetRequestState.message}
			</div>
			<div className={`${passwordResetRequestState.message === '' ? '' : 'hidden'}`}>
				<form className="space-y-6 flex flex-col" action={passwordResetAction} >
					<label htmlFor="email" className="custom-label">
						<span>Enter email</span>
						<input
							id="email"
							name="email"
							type="email"
							required
						/>
					</label>

					<button
						type="submit"
						className="btn self-end"
					>
						Submit
					</button>
				</form>
			</div>
			<Back />
		</div>
	)
}
