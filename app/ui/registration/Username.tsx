import { useContext, useRef } from 'react';
import isUsernameFree from '@/app/actions/user/signup/isUsernameFree';

import Back from '@/app/ui/buttons/Back';
import RegistrationContext from './RegistrationContext';
import { NextIcon } from '@/app/ui/icons/icons';

export default function Username() {

	let isButtonPressed = useRef(false);
	const { contextState, setContextState } = useContext(RegistrationContext);

	return (
		<form className={`${(contextState.currentPage !== 'username') && 'hidden'}`}>
			<label htmlFor="username" className="custom-label">
				<span>
					Username
				</span>
				<input
					id="username"
					name="username"
					type="text"
					value={contextState.data.username.value}
					className={`${contextState.data.username.valid && '!ring-green-500'}`}
					onChange={(e) => {

						let { value } = e.target;
						if (value) {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									username: {
										valid: true,
										message: '',
										value
									}
								}
							})
						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
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
				{contextState.data.username.message}
			</div>
			<div className="flex justify-between">
				<Back />
				<button type="submit" disabled={!contextState.data.username.valid} onClick={async (e) => {
					e.preventDefault();

					if (isButtonPressed.current) {
						return;
					}
					isButtonPressed.current = true;

					let value = contextState.data.username.value;
					if (await isUsernameFree(value)) {
						setContextState({
							currentPage: 'firstName',
							data: {
								...contextState.data,
								username: {
									value,
									valid: true,
									message: ''
								}
							}
						});
					} else {
						setContextState({
							currentPage: 'firstName',
							data: {
								...contextState.data,
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
