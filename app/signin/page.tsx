'use client'
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

export default function SignInPage() {

	const [state, formAction] = useFormState(signIn, initState);

	return (
		<div className="md:mt-10">
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action={formAction} >
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="username" className="block text-sm font-medium leading-6 ">
									Username
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
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 ">
									Password
								</label>
								<div className="text-sm">
									<Link href="/account/forgotPassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="p-2">
								{state?.message}
							</div>
							<SignInButton />
						</div>
					</form>
					<div className="text-sm mt-5">
						<a href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
							Don't have an account? Sign-up
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
