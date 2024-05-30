import { useContext, useRef, useEffect } from 'react';

import { GoBackIcon } from '@/app/ui/icons/icons';
import RegistrationContext from './RegistrationContext';

export default function Password2() {

	const { contextState, setContextState } = useContext(RegistrationContext);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
		return () => inputRef.current?.blur();
	}, [contextState.currentPage !== 'password2']);

	return (
		<form className={`${(contextState.currentPage !== 'password2') && 'hidden'}`}>
			<label htmlFor="password2" className="custom-label">
				<span>
					Password again
				</span>
				<input
					ref={inputRef}
					id="password2"
					type="password"
					className={`${contextState.data.password2.valid && '!ring-green-500'}`}
					value={contextState.data.password2.value}
					onChange={(e) => {
						let { value } = e.target;
						if (e.target.value === contextState.data.password.value) {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									password2: {
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
									password2: {
										valid: false,
										message: '',
										value
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
						currentPage: 'password',
						data: contextState.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" className="btn" disabled={!contextState.data.password2.valid} onClick={(e) => {
					e.preventDefault();
					setContextState({
						currentPage: 'email',
						data: contextState.data
					});
				}}>
					Next
				</button>
			</div>
		</form>
	)
}
