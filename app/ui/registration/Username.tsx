import { useContext, useRef } from 'react';
import isUsernameFree from '@/app/actions/user/signup/isUsernameFree';

import Back from '@/app/ui/buttons/Back';
import RegistrationContext from './RegistrationContext';
import type { RegistrationContextObject } from './RegistrationContext';
import { NextIcon } from '@/app/ui/icons/icons';

export default function Username({ props }: { props: { setState: (obj: RegistrationContextObject) => void } }) {

	let { setState } = props;
	let isButtonPressed = useRef(false);
	const ctx = useContext(RegistrationContext);

	return (
		<form className={`${(ctx.currentPage !== 'username') && 'hidden'}`}>
			<label htmlFor="username" className="custom-label">
				<span>
					Username
				</span>
				<input
					id="username"
					name="username"
					type="text"
					value={ctx.data.username.value}
					className={`${ctx.data.username.valid && '!ring-green-500'}`}
					onChange={(e) => {

						let { value } = e.target;
						if (value) {
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
									username: {
										valid: true,
										message: '',
										value
									}
								}
							})
						} else {
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
									username: {
										valid: false,
										message: '',
										value
									}
								}
							})
						}

					}}
					maxLength={50}
					required
				/>
			</label>
			<div className="h-10 flex justify-center items-center">
				{ctx.data.username.message}
			</div>
			<div className="flex justify-between">
				<Back />
				<button type="submit" disabled={!ctx.data.username.valid} onClick={async (e) => {
					e.preventDefault();

					if (isButtonPressed.current) {
						return;
					}
					isButtonPressed.current = true;

					let value = ctx.data.username.value;
					if (await isUsernameFree(value)) {
						setState({
							currentPage: 'firstName',
							data: {
								...ctx.data,
								username: {
									value,
									valid: true,
									message: ''
								}
							}
						});
					} else {
						setState({
							currentPage: 'firstName',
							data: {
								...ctx.data,
								username: {
									value,
									valid: false,
									message: 'Such username already exists'
								}
							}
						});
					}
					isButtonPressed.current = false;
				}} className="btn flex gap-2">Next {NextIcon}
				</button>
			</div>
		</form>
	)
}
