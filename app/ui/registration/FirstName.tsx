import { useContext, useRef, useEffect } from 'react';
import RegistrationContext from './RegistrationContext';
import { GoBackIcon } from '@/app/ui/icons/icons';

export default function FirstName() {

	const { contextState, setContextState } = useContext(RegistrationContext);
	const input = useRef<HTMLInputElement>(null);

	useEffect(() => {
		input.current?.focus();
		return () => input.current?.blur();
	}, [contextState.currentPage !== 'firstName']);

	return (
		<form className={`${(contextState.currentPage !== 'firstName') && 'hidden'}`}>
			<label htmlFor="firstName" className="custom-label">
				<span>
					First Name
				</span>
				<input
					ref={input}
					id="firstName"
					name="firstName"
					type="text"
					value={contextState.data.firstName.value}
					className={`${contextState.data.firstName.valid && '!ring-green-500'}`}
					onChange={(e) => {
						let { value } = e.target;
						if (value) {
							setContextState({
								currentPage: contextState.currentPage,
								data: {
									...contextState.data,
									firstName: {
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
									firstName: {
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
			<div className="h-10">
			</div>
			<div className="flex justify-between">
				<button type="button" onClick={() => {
					setContextState({
						currentPage: 'username',
						data: contextState.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" disabled={!contextState.data.firstName.valid} className="btn" onClick={(e) => {
					e.preventDefault();
					setContextState({
						currentPage: 'password',
						data: contextState.data,
					});
				}}>Next</button>
			</div>

		</form>
	)
}
