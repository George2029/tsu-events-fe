'use client'

import { useFormState } from 'react-dom';

import resetPassword from '@/app/actions/user/resetPassword';

const passwordFormInitialState = {
	status: false,
	message: '12+ characters'
}

function NewPassword() {
	return (
		<label htmlFor="password" className="custom-label">
			<span>New Password</span>
			<input
				id="password"
				name="password"
				type="password"
				autoComplete="password"
				minLength={12}
				required
			/>
		</label>
	)
}

function NewPassword2() {
	return (
		<label htmlFor="password2" className="custom-label">
			<span>New password again</span>
			<input
				id="password2"
				name="password2"
				type="password"
				minLength={12}
				autoComplete="password"
				required
			/>
		</label>
	)
}

export default function PasswordResetPage({ ...props }) {

	let { resetId } = props;

	const [resetPasswordState, resetPasswordAction] = useFormState(resetPassword, passwordFormInitialState);

	return (
		<div className="mt-4 w-full">
			<form className={`space-y-6 flex flex-col`} action={resetPasswordAction} >
				<input
					id="id"
					name="id"
					type="hidden"
					value={resetId}
				/>
				<NewPassword />
				<NewPassword2 />
				<div className="mt-4">
					{resetPasswordState?.message}
				</div>
				<button
					type="submit"
					className="btn self-end"
				>
					Update
				</button>
			</form>

		</div>
	)
}
