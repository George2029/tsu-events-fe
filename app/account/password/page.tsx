'use client'
import Link from 'next/link';
import { GoBackIcon } from '@/app/ui/icons';
import { useFormState, useFormStatus } from 'react-dom';
import updatePassword from '@/app/actions/user/update/updatePassword';


const passwordFormInitialState = {
	message: 'should contain at least 1 latin letter, digit, special character'
}

function UpdatePasswordButton() {

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
export default function UpdatePassword() {
	const [updatePasswordState, updatePasswordAction] = useFormState(updatePassword, passwordFormInitialState);
	return (
		<form className="gap-2 max-w-xs mx-auto flex flex-col" action={updatePasswordAction} >
			<label htmlFor="oldPassword" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-semibold leading-6 ">
				Old password
			</label>
			<input
				id="oldPassword"
				name="oldPassword"
				type="password"
				autoComplete="password"
				required
				className="block rounded-md border-1 border-inputBorder shadow-sm focus:ring-1 focus:ring-indigo-600 bg-inputBG dark:bg-darkinputBG focus:border-indigo-600"
			/>
			<label htmlFor="newPassword" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-semibold leading-6">
				New password
			</label>
			<input
				id="newPassword"
				name="newPassword"
				type="password"
				autoComplete="password"
				required
				className="block rounded-md border-1 border-inputBorder shadow-sm focus:ring-1 focus:ring-indigo-600 bg-inputBG dark:bg-darkinputBG focus:border-indigo-600"
			/>

			<div className="text-sm">
				{updatePasswordState?.message}
			</div>
			<div className="flex justify-between">
				<Link href="/account" className="w-fit md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder flex p-2 gap-2 rounded-lg"><span>Back</span> {GoBackIcon}</Link>
				<UpdatePasswordButton />
			</div>
		</form>

	)
}
