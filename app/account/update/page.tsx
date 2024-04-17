'use client'
import { useState } from 'react'
import { useFormState } from 'react-dom';

import updateUsername from '@/app/actions/user/update/updateUsername';
import updateEmail from '@/app/actions/user/update/updateEmail';
import updatePassword from '@/app/actions/user/update/updatePassword';
import updateFullName from '@/app/actions/user/update/updateFullName';

const usernameFormInitialState = {
	message: 'should start with a latin letter and be > 5 chars and < 15'
}

const emailFormInitialState = {
	message: 'should be a valid email'
}

const passwordFormInitialState = {
	message: 'should contain at least 1 latin letter, digit, special character'
}

const fullNameFormInitialState = {
	message: 'should contain only latin chars'
}

export default function UpdateUser() {

	const [updateUsernameState, updateUsernameAction] = useFormState(updateUsername, usernameFormInitialState);
	const [updateEmailState, updateEmailAction] = useFormState(updateEmail, emailFormInitialState);
	const [updatePasswordState, updatePasswordAction] = useFormState(updatePassword, passwordFormInitialState);
	const [updateFullNameState, updateFullNameAction] = useFormState(updateFullName, fullNameFormInitialState);

	const [isUsernameClicked, setIsUsernameClicked] = useState(false);
	const [isEmailClicked, setIsEmailClicked] = useState(false);
	const [isPasswordClicked, setIsPasswordClicked] = useState(false);
	const [isFullNameClicked, setIsFullNameClicked] = useState(false);


	return (
		<div className="mt-6 flex items-center flex-col">
			<div className={`flex gap-2 `}>
				<button className="p-1 rounded-md ring-1 ring-slate-500" onClick={
					() => {
						setIsUsernameClicked((state: boolean) => !state)
						setIsEmailClicked(false);
						setIsPasswordClicked(false);
						setIsFullNameClicked(false);
					}
				}>Change username
				</button>
				<button className="p-1 rounded-md ring-1 ring-slate-500"
					onClick={
						() => {
							setIsEmailClicked((state: boolean) => !state)
							setIsUsernameClicked(false);
							setIsPasswordClicked(false);
							setIsFullNameClicked(false);
						}
					}>Change email</button>

				<button className="p-1 rounded-md ring-1 ring-slate-500"
					onClick={
						() => {
							setIsPasswordClicked((state: boolean) => !state)
							setIsUsernameClicked(false);
							setIsFullNameClicked(false);
							setIsEmailClicked(false);
						}
					}>Change password</button>

				<button className="p-1 rounded-md ring-1 ring-slate-500"
					onClick={
						() => {
							setIsFullNameClicked((state: boolean) => !state)
							setIsUsernameClicked(false);
							setIsPasswordClicked(false);
							setIsEmailClicked(false);
						}
					}>Change fullname
				</button>
			</div>
			<div className="mt-4 w-full">
				<div className={`${isUsernameClicked ? '' : 'hidden'}`}>
					<form className="space-y-6" action={updateUsernameAction} >
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="username" className="block text-sm font-medium leading-6 ">
									New username
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
								{updateUsernameState?.message}
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
				<div className={`${isEmailClicked ? '' : 'hidden'}`}>
					<form className="space-y-6" action={updateEmailAction} >
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="email" className="block text-sm font-medium leading-6 ">
									New email
								</label>
							</div>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="current-email"
									required
									className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="p-2">
								{updateEmailState?.message}
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
				<div className={`${isPasswordClicked ? '' : 'hidden'}`}>
					<form className="space-y-6" action={updatePasswordAction} >
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="oldPassword" className="block text-sm font-medium leading-6 ">
									Old password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="oldPassword"
									name="oldPassword"
									type="password"
									autoComplete="password"
									required
									className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="newPassword" className="block text-sm font-medium leading-6 ">
									New password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="newPassword"
									name="newPassword"
									type="password"
									autoComplete="password"
									required
									className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="p-2">
								{updatePasswordState?.message}
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
				<div className={`${isFullNameClicked ? '' : 'hidden'}`}>
					<form className="space-y-6" action={updateFullNameAction} >
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="fullName" className="block text-sm font-medium leading-6 ">
									New fullName
								</label>
							</div>
							<div className="mt-2">
								<input
									id="fullName"
									name="fullName"
									type="text"
									autoComplete="fullName"
									required
									className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="p-2">
								{updateFullNameState?.message}
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
			</div>
		</div>
	)
}
