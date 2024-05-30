import { useContext, useRef, useEffect } from 'react';

import { GoBackIcon } from '@/app/ui/icons/icons';
import RegistrationContext from './RegistrationContext';

export default function Password() {

	const { contextState, setContextState } = useContext(RegistrationContext);

	let input = useRef<HTMLInputElement>(null);

	useEffect(() => {
		input.current?.focus();
		return () => input.current?.blur();
	}, [contextState.currentPage !== 'password']);

	return (
		<form className={`${(contextState.currentPage !== 'password') && 'hidden'}`}>
			<label htmlFor="password" className="custom-label">
				<span>
					Password
				</span>
				<input
					id="password"
					ref={input}
					type="password"
					value={contextState.data.password?.value}
					className={`${contextState.data.password?.valid && '!ring-green-500'}`}
					onChange={(e) => {
						let { value } = e.target;
						if (value.length >= 12) {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									password: {
										valid: true,
										message: '',
										value
									},
									password2: {
										valid: false,
										message: '',
										value: ''
									}
								}
							})
						} else {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									password: {
										valid: false,
										message: '',
										value
									},
									password2: {
										valid: false,
										message: '',
										value: ''
									}
								}
							})
						}
					}}
					minLength={12}
					required
				/>
			</label>
			<div className="h-10"></div>
			<div className="flex justify-between">
				<button type="button" onClick={() => {
					setContextState({
						currentPage: 'firstName',
						data: contextState.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" className="btn" disabled={!contextState.data.password?.valid} onClick={(e) => {
					e.preventDefault();
					setContextState({
						currentPage: 'password2',
						data: contextState.data
					});
				}}>
					Next
				</button>
			</div>
		</form>
	)
}
