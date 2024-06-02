'use client'

import { useState } from 'react';

import RegistrationContext from '@/app/ui/registration/RegistrationContext';
import type { RegistrationContextObject } from '@/app/ui/registration/RegistrationContext';

import Username from '@/app/ui/registration/Username';
import FirstName from '@/app/ui/registration/FirstName';
import Password from '@/app/ui/registration/Password';
import Password2 from '@/app/ui/registration/Password2';
import Email from '@/app/ui/registration/Email';
import Code from '@/app/ui/registration/Code';

export default function SignUpPage() {

	let [contextState, setContextState] = useState<RegistrationContextObject>({
		currentPage: 'username',
		data: {
			username: {
				value: '',
				valid: false,
				message: ''
			},
			firstName: {
				value: '',
				valid: false,
				message: ''
			},
			password: {
				value: '',
				valid: false,
				message: ''
			},
			password2: {
				value: '',
				valid: false,
				message: ''
			},
			email: {
				value: '',
				valid: false,
				message: ''
			},
			code: {
				digits: ['', '', '', ''],
				valid: false,
				message: ''
			}
		}
	});


	return (
		<div className="px-10 max-w-80 w-full mt-16 md:mt-10">
			<div className="flex flex-col gap-10 justify-center px-6 py-12">

				<div className="text-center text-2xl font-bold">
					Sign up
				</div>


				<RegistrationContext.Provider value={{ contextState, setContextState }}>
					<Username />
					<FirstName />
					<Password />
					<Password2 />
					<Email />
					<Code />
				</RegistrationContext.Provider>
			</div>

		</div>
	)
}

