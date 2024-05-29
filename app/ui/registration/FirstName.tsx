import { useContext, useRef, useEffect } from 'react';
import RegistrationContext from './RegistrationContext';
import { GoBackIcon } from '@/app/ui/icons/icons';
import type { RegistrationContextObject } from './RegistrationContext';

export default function FirstName({ props }: { props: { setState: (obj: RegistrationContextObject) => void } }) {

	const ctx = useContext(RegistrationContext);
	const input = useRef<HTMLInputElement>(null);

	useEffect(() => {
		input.current?.focus();
		return () => input.current?.blur();
	}, [ctx.currentPage !== 'firstName']);

	let { setState } = props;

	return (
		<form className={`${(ctx.currentPage !== 'firstName') && 'hidden'}`}>
			<label htmlFor="firstName" className="custom-label">
				<span>
					First Name
				</span>
				<input
					ref={input}
					id="firstName"
					name="firstName"
					type="text"
					value={ctx.data.firstName.value}
					className={`${ctx.data.firstName.valid && '!ring-green-500'}`}
					onChange={(e) => {
						let { value } = e.target;
						if (value) {
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
									firstName: {
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
					props.setState({
						currentPage: 'username',
						data: ctx.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" disabled={!ctx.data.firstName.valid} className="btn" onClick={(e) => {
					e.preventDefault();
					setState({
						currentPage: 'password',
						data: ctx.data,
					});
				}}>Next</button>
			</div>

		</form>
	)
}
