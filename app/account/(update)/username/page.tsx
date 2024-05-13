'use client'
import { useFormState, useFormStatus } from 'react-dom';

import updateUsername from '@/app/actions/user/update/updateUsername';
const usernameFormInitialState = {
	message: 'should start with a latin letter, 5 < username < 31'
}

function UpdateUsernameButton() {

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

export default function UpdateUsername() {
	const [updateUsernameState, updateUsernameAction] = useFormState(updateUsername, usernameFormInitialState);
	return (
		<form className="gap-2 flex flex-col" action={updateUsernameAction} >
			<label htmlFor="username" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-semibold leading-6 ">
				New username
			</label>
			<input
				id="username"
				name="username"
				type="text"
				minLength={6}
				maxLength={30}
				autoComplete="username"
				required
				className="block rounded-md border-1 border-inputBorder shadow-sm focus:ring-1 focus:ring-indigo-600 bg-inputBG dark:bg-darkinputBG focus:border-indigo-600"
			/>

			<div className="text-sm">
				{updateUsernameState?.message}
			</div>
			<UpdateUsernameButton />
		</form>
	)
}
