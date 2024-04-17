'use client'

import { useFormState } from 'react-dom';
import signUp from '@/app/actions/user/signup';
import Link from 'next/link';

const initialSignUpFormState = {
	message: 'Provide valid and unique email, username, and password'
}

export default function SignUpPage() {

	const [signUpFormState, setSignUpFormState] = useFormState(signUp, initialSignUpFormState);

	return (
		<div className="md:mt-10">
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
						Sign up
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action={setSignUpFormState}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 ">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

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
									className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 ">
									Password
								</label>
							</div>

							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password2" className="block text-sm font-medium leading-6 ">
									Password again
								</label>
							</div>

							<div className="mt-2">
								<input
									id="password2"
									name="password2"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="p-2">
								{signUpFormState?.message}
							</div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</button>
						</div>
					</form>

					<div className="text-sm mt-5">
						<Link href="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
							Have an account? Sign-in
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
