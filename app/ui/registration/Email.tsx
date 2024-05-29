import { useContext, useRef, useEffect } from 'react';

import isEmailFree from '@/app/actions/user/signup/isEmailFree';

import { GoBackIcon } from '@/app/ui/icons/icons';
import emailVerificationCode from '@/app/actions/user/signup/emailVerificationCode';
import { NextIcon } from '@/app/ui/icons/icons';
import RegistrationContext from './RegistrationContext';
import type { RegistrationContextObject } from './RegistrationContext';

export default function Email({ props }: { props: { setState: (obj: RegistrationContextObject) => void } }) {

	let isButtonPressed = useRef(false);
	let inputRef = useRef<HTMLInputElement>(null);
	let { setState } = props;
	const ctx = useContext(RegistrationContext);

	useEffect(() => {
		inputRef.current?.focus();
		return () => inputRef.current?.blur();
	}, [ctx.currentPage !== "email"]);

	return (
		<form className={`${(ctx.currentPage !== 'email') ? 'hidden' : ''}`}>
			<label htmlFor="email" className="custom-label">
				<span>
					Email
				</span>
				<input
					ref={inputRef}
					id="email"
					type="email"
					value={ctx.data.email.value}
					className={`${ctx.data.email.valid && '!ring-green-500'}`}
					maxLength={50}
					required
					onChange={(e) => {
						let { value } = e.target;
						if (value) {
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
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
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
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
				{ctx.data.email.message}
			</div>
			<div className="flex justify-between">
				<button type="button" onClick={() => {
					props.setState({
						currentPage: 'password2',
						data: ctx.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" disabled={!ctx.data.email.valid} onClick={async (e) => {
					e.preventDefault();

					if (isButtonPressed.current) {
						return;
					}
					isButtonPressed.current = true;

					let value = ctx.data.email.value;
					let free = await isEmailFree(value)
					await emailVerificationCode(ctx.data.email.value);
					if (free) {
						setState({
							currentPage: 'code',
							data: {
								...ctx.data,
								email: {
									value,
									valid: true,
									message: ''
								}
							}
						});
					} else {
						setState({
							currentPage: ctx.currentPage,
							data: {
								...ctx.data,
								email: {
									value: ctx.data.email.value,
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
