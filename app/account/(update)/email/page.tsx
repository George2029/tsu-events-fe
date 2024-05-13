'use client'

import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';
import updateEmail from '@/app/actions/user/update/updateEmail';

const emailFormInitialState = {
	message: 'should be a valid email'
}

function UpdateEmailButton() {

	const { pending } = useFormStatus();
	return (

		<button
			type="submit"
			disabled={pending}
			className="w-fit text-sm font-semibold md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder flex p-2 gap-2 rounded-lg"
		>
			{pending ? "Updating..." : "Update"}
		</button>
	)
}

export default function UpdateEmail() {
	const [updateEmailState, updateEmailAction] = useFormState(updateEmail, emailFormInitialState);
	return (
		<form className="gap-2 flex flex-col" action={updateEmailAction} >
			<label htmlFor="email" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-semibold leading-6">
				New Email
			</label>
			<input
				id="email"
				name="email"
				type="email"
				autoComplete="current-email"
				minLength={6}
				maxLength={40}
				required
				className="block rounded-md border-1 border-inputBorder shadow-sm focus:ring-1 focus:ring-indigo-600 bg-inputBG dark:bg-darkinputBG focus:border-indigo-600"
			/>
			<div className="text-sm">
				{updateEmailState?.message}
			</div>
			<UpdateEmailButton />
		</form>
	)
}
