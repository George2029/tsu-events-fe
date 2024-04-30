'use client'

import { useFormState, useFormStatus } from 'react-dom';
import signUp from '@/app/actions/user/signup';
import Link from 'next/link';

const initialSignUpFormState = {
	message: 'Provide valid data'
}

function SignUpButton() {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			type="submit"
			className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold g text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{pending ? "Creating..." : "Sign up"}
		</button>
	)
}

function Email() {
	return (
		<label htmlFor="email" className="block text-sm g ">
			<span className="block after:content-['*'] font-semibold after:ml-0.5 after:text-red-500">
				Email
			</span>
			<input
				id="email"
				name="email"
				type="email"
				autoComplete="email"
				required
				className="w-full block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
			/>
		</label>
	)
}

function Username() {
	return (
		<label htmlFor="username" className="block text-sm g ">
			<span className="block after:content-['*'] font-semibold after:ml-0.5 after:text-red-500">
				Username
			</span>
			<input
				id="username"
				name="username"
				type="text"
				autoComplete="username"
				required
				className="w-full block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
			/>
		</label>
	)
}

function FirstName() {
	return (
		<label htmlFor="firstName" className="block text-sm g ">
			<span className="block after:content-['*'] font-semibold after:ml-0.5 after:text-red-500">
				First Name
			</span>
			<input
				id="firstName"
				name="firstName"
				type="text"
				required
				className="w-full block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
			/>
		</label>
	)
}

function Password() {
	return (
		<label htmlFor="password" className="block text-sm g ">
			<span className="block after:content-['*'] font-semibold after:ml-0.5 after:text-red-500">
				Password
			</span>
			<input
				id="password"
				name="password"
				type="password"
				required
				className="w-full block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
			/>
		</label>
	)
}

function Password2() {
	return (
		<label htmlFor="password2" className="block text-sm g ">
			<span className="block after:content-['*'] font-semibold after:ml-0.5 after:text-red-500">
				Password again
			</span>

			<input
				id="password2"
				name="password2"
				type="password"
				required
				className="w-full block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
			/>
		</label>

	)
}
export default function SignUpPage() {

	const [signUpFormState, setSignUpFormState] = useFormState(signUp, initialSignUpFormState);

	return (
		<div className="px-10 md:mt-10 max-w-sm mt-16">
			<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
				Sign up
			</h2>
			<form className="space-y-4" action={setSignUpFormState}>
				<Email />
				<Username />
				<FirstName />
				<Password />
				<Password2 />
				<div className="text-sm">
					{signUpFormState?.message}
				</div>
				<SignUpButton />
			</form>

			<div className="text-sm mt-5">
				<Link href="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
					Have an account? Sign-in
				</Link>
			</div>
		</div>
	)
}
