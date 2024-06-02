'use client'

//import * as VKID from '@vkid/sdk';
import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { signIn } from '@/app/actions/user/signin';
import Link from 'next/link';

const initState = {
	message: ''
}

function SignInButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{pending ? "Loading..." : "Sign in"}
		</button>
	)
}

const Email = () => {
	return (
		<label htmlFor="email" className="custom-label">
			<span>Email</span>
			<input
				id="email"
				name="email"
				type="email"
				required
			/>
		</label>
	)
}

const Password = () => {
	return (
		<label htmlFor="password" className="custom-label">
			<span>Password</span>
			<input
				id="password"
				name="password"
				type="password"
				required
			/>
		</label>

	)
}

export default function SignInPage() {

	/*	useEffect(() => {
	
			VKID.Config.set({
				app: 51930833,
				redirectUrl: 'https://localhost/vkidAuth'
			});
	
			const oneTap = new VKID.OneTap();
	
			const container = document.getElementById('VkIdSdkOneTap');
	
			if (container) {
				oneTap.render({ container, lang: VKID.Languages.ENG });
			}
	
			return () => {
				oneTap.close();
			}
	
		}, []);
		*/

	const [state, formAction] = useFormState(signIn, initState);

	return (
		<div className="px-10 max-w-80 w-full mt-16 md:mt-10">
			<div className="flex flex-col gap-10 justify-center px-6 py-12">

				<div className="text-center text-2xl font-bold">
					Sign in
				</div>

				<form className="space-y-6" action={formAction} >
					<Email />
					<Password />
					<div className="p-2">
						{state?.message}
					</div>
					<SignInButton />
					<Link href="/signup" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
						Don't have an account? Sign up
					</Link>
				</form>


				<div id="VkIdSdkOneTap"></div>


			</div>
		</div>
	)
}

/*
 *
					<div className="text-sm">
						<Link href="/forgotPassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
							Forgot password?
						</Link>
					</div>
					*/
