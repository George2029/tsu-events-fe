'use client'
import { useState } from 'react'
import { useFormState } from 'react-dom';

import updateUsername from '@/app/actions/user/update/updateUsername';
import updateEmail from '@/app/actions/user/update/updateEmail';
import updatePassword from '@/app/actions/user/update/updatePassword';
import updateFirstName from '@/app/actions/user/update/updateFirstName';

const usernameFormInitialState = {
	message: 'should start with a latin letter, 5 < username < 31'
}

const emailFormInitialState = {
	message: 'should be a valid email'
}

const passwordFormInitialState = {
	message: 'should contain at least 1 latin letter, digit, special character'
}

const firstNameFormInitialState = {
	message: 'Latin characters, <=50'
}

function UpdateFirstName({ props }: { props: { isFirstNameClicked: boolean } }) {
	let { isFirstNameClicked } = props;
	const [updateFirstNameState, updateFirstNameAction] = useFormState(updateFirstName, firstNameFormInitialState);
	return (
		<div className={`${isFirstNameClicked ? '' : 'hidden'}`}>
			<form className="space-y-2" action={updateFirstNameAction} >
				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="firstName" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-medium leading-6 ">
							New first name
						</label>
					</div>
					<div className="mt-2">
						<input
							id="firstName"
							name="firstName"
							type="text"
							autoComplete="firstName"
							maxLength={50}
							pattern="^[A-Za-z][A-Za-z\s]{0,50}$"
							required
							className="block text-black w-first rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="">
						{updateFirstNameState?.message}
					</div>
					<button
						type="submit"
						className="flex w-first justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Update
					</button>
				</div>
			</form>

		</div>
	)
}

function UpdatePassword({ props }: { props: { isPasswordClicked: boolean } }) {
	const [updatePasswordState, updatePasswordAction] = useFormState(updatePassword, passwordFormInitialState);
	let { isPasswordClicked } = props;
	return (
		<div className={`${isPasswordClicked ? '' : 'hidden'}`}>
			<form className="space-y-6" action={updatePasswordAction} >
				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="oldPassword" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-medium leading-6 ">
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
							className="block text-black w-first rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="newPassword" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-medium leading-6 ">
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
							className="block text-black w-first rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="p-2">
						{updatePasswordState?.message}
					</div>
					<button
						type="submit"
						className="flex w-first justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Update
					</button>
				</div>
			</form>

		</div>
	)
}

function UpdateUsername({ props }: { props: { isUsernameClicked: boolean } }) {
	const [updateUsernameState, updateUsernameAction] = useFormState(updateUsername, usernameFormInitialState);
	let { isUsernameClicked } = props;
	return (
		<div className={`${isUsernameClicked ? '' : 'hidden'}`}>
			<form className="space-y-6" action={updateUsernameAction} >
				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="username" className="block after:text-red-500 after:content-['*'] after:ml-0.5 font-medium leading-6 ">
							New username
						</label>
					</div>
					<div className="mt-2">
						<input
							id="username"
							name="username"
							type="text"
							minLength={6}
							maxLength={30}
							autoComplete="username"
							required
							className="block text-black w-first rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="p-2">
						{updateUsernameState?.message}
					</div>
					<button
						type="submit"
						className="flex w-first justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	)
}

function UpdateEmail({ props }: { props: { isEmailClicked: boolean } }) {
	let { isEmailClicked } = props;
	const [updateEmailState, updateEmailAction] = useFormState(updateEmail, emailFormInitialState);
	return (
		<div className={`${isEmailClicked ? '' : 'hidden'}`}>
			<form className="space-y-6" action={updateEmailAction} >
				<div>
					<div className="flex items-center justify-between">
						<label htmlFor="email" className="after:text-red-500 after:content-['*'] after:ml-0.5 block text-sm font-medium leading-6 ">
							New email
						</label>
					</div>
					<div className="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="current-email"
							minLength={6}
							maxLength={40}
							required
							className="block text-black w-first rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div className="p-2">
						{updateEmailState?.message}
					</div>
					<button
						type="submit"
						className="flex w-first justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	)
}
export default function UpdateUser() {


	const [isUsernameClicked, setIsUsernameClicked] = useState(false);
	const [isEmailClicked, setIsEmailClicked] = useState(false);
	const [isPasswordClicked, setIsPasswordClicked] = useState(false);
	const [isFirstNameClicked, setIsFirstNameClicked] = useState(false);


	return (
		<div className="mt-6 flex items-center flex-col">
			<div className={`flex gap-2 `}>
				<button className="p-1 rounded-md" onClick={
					() => {
						setIsUsernameClicked((state: boolean) => !state)
						setIsEmailClicked(false);
						setIsPasswordClicked(false);
						setIsFirstNameClicked(false);
					}
				}>Change username
				</button>
				<button className="p-1 rounded-md"
					onClick={
						() => {
							setIsEmailClicked((state: boolean) => !state)
							setIsUsernameClicked(false);
							setIsPasswordClicked(false);
							setIsFirstNameClicked(false);
						}
					}>Change email</button>

				<button className="p-1 rounded-md"
					onClick={
						() => {
							setIsPasswordClicked((state: boolean) => !state)
							setIsUsernameClicked(false);
							setIsFirstNameClicked(false);
							setIsEmailClicked(false);
						}
					}>Change password</button>

				<button className="p-1 rounded-md"
					onClick={
						() => {
							setIsFirstNameClicked((state: boolean) => !state)
							setIsUsernameClicked(false);
							setIsPasswordClicked(false);
							setIsEmailClicked(false);
						}
					}>Change firstname
				</button>
			</div>
			<div className="mt-4 w-first">
				<UpdateUsername props={{ isUsernameClicked }} />
				<UpdateEmail props={{ isEmailClicked }} />
				<UpdatePassword props={{ isPasswordClicked }} />
				<UpdateFirstName props={{ isFirstNameClicked }} />
			</div>
		</div>
	)
}
