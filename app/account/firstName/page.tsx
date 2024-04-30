'use client'
import Link from 'next/link';
import { GoBackIcon } from '@/app/ui/icons';

import { useFormState, useFormStatus } from 'react-dom';
import updateFirstName from '@/app/actions/user/update/updateFirstName';

const firstNameFormInitialState = {
	message: 'Latin characters, <=50'
}

function UpdateFirstNameButton() {

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

export default function UpdateFirstName() {
	const [updateFirstNameState, updateFirstNameAction] = useFormState(updateFirstName, firstNameFormInitialState);
	return (
		<form className="gap-2 max-w-xs mx-auto flex flex-col" action={updateFirstNameAction} >
			<label htmlFor="firstName" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-semibold leading-6 ">
				New first name
			</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				autoComplete="firstName"
				maxLength={50}
				pattern="^[A-Za-z][A-Za-z\s]{0,50}$"
				required
				className="block rounded-md border-1 border-inputBorder shadow-sm focus:ring-1 focus:ring-indigo-600 bg-inputBG dark:bg-darkinputBG focus:border-indigo-600"
			/>
			<div className="text-sm">
				{updateFirstNameState?.message}
			</div>
			<div className="flex justify-between">
				<Link href="/account" className="w-fit md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder flex p-2 gap-2 rounded-lg"><span>Back</span> {GoBackIcon}</Link>
				<UpdateFirstNameButton />
			</div>
		</form>

	)
}
