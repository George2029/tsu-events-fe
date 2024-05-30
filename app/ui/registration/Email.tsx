import { useContext, useRef, useEffect } from 'react';

import isEmailFree from '@/app/actions/user/signup/isEmailFree';

import { GoBackIcon } from '@/app/ui/icons/icons';
import emailVerificationCode from '@/app/actions/user/signup/emailVerificationCode';
import { NextIcon } from '@/app/ui/icons/icons';
import RegistrationContext from './RegistrationContext';

export default function Email() {

	let isButtonPressed = useRef(false);
	let inputRef = useRef<HTMLInputElement>(null);
	const { contextState, setContextState } = useContext(RegistrationContext);

	useEffect(() => {
		inputRef.current?.focus();
		return () => inputRef.current?.blur();
	}, [contextState.currentPage !== "email"]);

	return (
		<form className={`${(contextState.currentPage !== 'email') ? 'hidden' : ''}`}>
			<label htmlFor="email" className="custom-label">
				<span>
					Email
				</span>
				<input
					ref={inputRef}
					id="email"
					type="email"
					value={contextState.data.email.value}
					className={`${contextState.data.email.valid && '!ring-green-500'}`}
					maxLength={50}
					required
					onChange={(e) => {
						let { value } = e.target;
						if (value) {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									email: {
										valid: true,
										message: '',
										value
									},
									code: {
										valid: false,
										digits: ['', '', '', ''],
										message: ''
									}
								}
							})
						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									email: {
										valid: false,
										message: '',
										value
									},
									code: {
										valid: false,
										digits: ['', '', '', ''],
										message: ''
									}
								}
							})
						}
					}}
				/>
			</label>

			<div className="h-10 flex justify-center items-center">
				{contextState.data.email.message}
			</div>
			<div className="flex justify-between">
				<button type="button" onClick={() => {
					setContextState({
						currentPage: 'password2',
						data: contextState.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" disabled={!contextState.data.email.valid} onClick={async (e) => {
					e.preventDefault();

					if (isButtonPressed.current) {
						return;
					}
					isButtonPressed.current = true;

					let value = contextState.data.email.value;
					let free = await isEmailFree(value)
					await emailVerificationCode(contextState.data.email.value);
					if (free) {
						setContextState({
							currentPage: 'code',
							data: {
								...contextState.data,
								email: {
									value,
									valid: true,
									message: ''
								}
							}
						});
					} else {
						setContextState({
							currentPage: contextState.currentPage,
							data: {
								...contextState.data,
								email: {
									value: contextState.data.email.value,
									valid: false,
									message: 'Such email already exists'
								}
							}
						})
					}

					isButtonPressed.current = false;

				}} className="btn flex gap-2">Finish {NextIcon}
				</button>
			</div>
		</form>
	)
}
