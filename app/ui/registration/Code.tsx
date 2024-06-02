import { useContext, useRef, useEffect } from 'react';
import RegistrationContext from './RegistrationContext';
import { GoBackIcon } from '@/app/ui/icons/icons';
import verifyCode from '@/app/actions/user/signup/verifyCode';
import createUser from '@/app/actions/user/signup';

export default function Code() {

	const { contextState, setContextState } = useContext(RegistrationContext);

	const isButtonPressed = useRef(false);

	const firstDigit = useRef<HTMLInputElement>(null);
	const secondDigit = useRef<HTMLInputElement>(null);
	const thirdDigit = useRef<HTMLInputElement>(null);
	const fourthDigit = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (contextState.currentPage === 'code') {
			console.log('useEffect');
			if (firstDigit.current?.value) {
				if (secondDigit.current?.value) {
					if (thirdDigit.current?.value) {
						fourthDigit.current?.focus();
					} else {
						thirdDigit.current?.focus();
					}
				} else {
					secondDigit.current?.focus();
				}
			} else {
				firstDigit.current?.focus();
			}
		}

		return () => firstDigit.current?.blur();
	}, [contextState.currentPage !== 'code'])

	return (
		<form className={`${(contextState.currentPage !== 'code') && 'hidden'}`}>
			<div className="text-center">
				Enter the Code sent to Email
			</div>
			<div className="flex justify-center items-center gap-2">
				<input
					ref={firstDigit}
					inputMode="numeric"
					value={contextState.data.code.digits[0]}
					className="inputDigit"
					onChange={(e) => {
						let { value } = e.target;
						if (isNaN(+value) || value.length > 1) {
							return;
						}
						let digits = contextState.data.code.digits;
						digits[0] = value;

						let valid = Boolean(value && secondDigit.current?.value && thirdDigit.current?.value && fourthDigit.current?.value);
						if (value) {
							secondDigit.current?.focus();
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid,
										message: '',
										digits
									}
								}
							})
						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid: false,
										message: '',
										digits
									}
								}
							})
						}
					}}
				/>
				<input
					inputMode="numeric"
					ref={secondDigit}
					value={contextState.data.code.digits[1]}
					className="inputDigit"
					onKeyDown={(e) => {
						if (secondDigit.current?.value) {
							return
						} else {
							if (e.key === "Backspace") {
								firstDigit.current?.focus();
							}
						}
					}}
					onChange={(e) => {
						let { value } = e.target;
						if (isNaN(+value) || value.length > 1) {
							return;
						}
						let digits = contextState.data.code.digits;
						digits[1] = value;

						let valid = Boolean(value && firstDigit.current?.value && thirdDigit.current?.value && fourthDigit.current?.value);
						if (value) {
							thirdDigit.current?.focus();
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid,
										message: '',
										digits
									}
								}
							})
						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid: false,
										message: '',
										digits
									}
								}
							})
						}
					}}
				/>
				<input
					inputMode="numeric"
					ref={thirdDigit}
					value={contextState.data.code.digits[2]}
					className="inputDigit"
					onKeyDown={(e) => {
						if (thirdDigit.current?.value) {
							return
						} else {
							if (e.key === "Backspace") {
								secondDigit.current?.focus();
							}
						}
					}}
					onChange={(e) => {
						let { value } = e.target;
						if (isNaN(+value) || value.length > 1) {
							return;
						}
						let digits = contextState.data.code.digits;
						digits[2] = value;

						let valid = Boolean(value && firstDigit.current?.value && secondDigit.current?.value && fourthDigit.current?.value);
						if (value) {
							fourthDigit.current?.focus();
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid,
										message: '',
										digits
									}
								}
							})
						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid: false,
										message: '',
										digits
									}
								}
							})
						}
					}}
				/>
				<input
					inputMode="numeric"
					ref={fourthDigit}
					value={contextState.data.code.digits[3]}
					className="inputDigit"
					onKeyDown={(e) => {
						if (fourthDigit.current?.value) {
							return
						} else {
							if (e.key === "Backspace") {
								thirdDigit.current?.focus();
							}
						}
					}}
					onChange={async (e) => {
						if (isButtonPressed.current) {
							return
						}
						isButtonPressed.current = true;

						let { value } = e.target;
						if (isNaN(+value) || value.length > 1) {
							isButtonPressed.current = false;
							return;
						}
						let digits = contextState.data.code.digits;
						digits[3] = value;

						let valid = Boolean(value && firstDigit.current?.value && secondDigit.current?.value && thirdDigit.current?.value);
						if (valid) {

							let res = await verifyCode(contextState.data.email.value, String(contextState.data.code.digits.join('')));
							if (!res) {
								setContextState({
									currentPage: contextState.currentPage,
									data: {
										...contextState.data,
										code: {
											digits: contextState.data.code.digits,
											valid: false,
											message: 'The code is wrong'
										}
									}
								})
							} else {
								let email = contextState.data.email.value;
								let username = contextState.data.username.value;
								let password = contextState.data.password.value;
								let firstName = contextState.data.firstName.value;
								let user = { email, username, password, firstName };
								let ok = await createUser(user);
								if (ok === false) {
									setContextState({
										currentPage: contextState.currentPage,
										data: {
											...contextState.data,
											code: {
												digits: contextState.data.code.digits,
												valid: false,
												message: 'Something went wrong!'
											}
										}
									})
								} else {
									setContextState({
										currentPage: contextState.currentPage,
										data: {
											...contextState.data,
											code: {
												digits: contextState.data.code.digits,
												valid: false,
												message: 'Please wait...'
											}
										}
									})
								}
							}
						} else if (value) {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid,
										message: '',
										digits
									}
								}
							})
						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										valid: false,
										message: '',
										digits
									}
								}
							})
						}
						isButtonPressed.current = false;
					}}
				/>
			</div>
			<div className="h-10">
				{contextState.data.code.message}
			</div>
			<div className="flex justify-between">
				<button type="button" onClick={() => {
					setContextState({
						currentPage: 'email',
						data: contextState.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" disabled={!contextState.data.code.valid} className="btn" onClick={async (e) => {
					e.preventDefault();
					if (isButtonPressed.current) {
						return
					}
					isButtonPressed.current = true;

					let res = await verifyCode(contextState.data.email.value, String(contextState.data.code.digits.join('')));
					if (!res) {
						setContextState({
							currentPage: contextState.currentPage,
							data: {
								...contextState.data,
								code: {
									digits: contextState.data.code.digits,
									valid: false,
									message: 'The code is wrong'
								}
							}
						})
					} else {
						let email = contextState.data.email.value;
						let username = contextState.data.username.value;
						let password = contextState.data.password.value;
						let firstName = contextState.data.firstName.value;
						let user = { email, username, password, firstName };
						let ok = await createUser(user);
						if (!ok) {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										digits: contextState.data.code.digits,
										valid: false,
										message: 'Something went wrong!'
									}
								}
							})

						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									code: {
										digits: contextState.data.code.digits,
										valid: false,
										message: 'Please wait...'
									}
								}
							})
						}


					}
					isButtonPressed.current = false;
				}}>Next</button>
			</div>

		</form>
	)
}

