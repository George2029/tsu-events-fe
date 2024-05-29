import { useContext, useRef, useEffect } from 'react';

import { GoBackIcon } from '@/app/ui/icons/icons';
import RegistrationContext from './RegistrationContext';
import type { RegistrationContextObject } from './RegistrationContext';

export default function Password({ props }: { props: { setState: (obj: RegistrationContextObject) => void } }) {

	const ctx = useContext(RegistrationContext);

	let input = useRef<HTMLInputElement>(null);

	useEffect(() => {
		input.current?.focus();
		return () => input.current?.blur();
	}, [ctx.currentPage !== 'password']);

	let { setState } = props;

	return (
		<form className={`${(ctx.currentPage !== 'password') && 'hidden'}`}>
			<label htmlFor="password" className="custom-label">
				<span>
					Password
				</span>
				<input
					id="password"
					ref={input}
					type="password"
					value={ctx.data.password?.value}
					className={`${ctx.data.password?.valid && '!ring-green-500'}`}
					onChange={(e) => {
						let { value } = e.target;
						if (value.length >= 12) {
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
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
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
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
					props.setState({
						currentPage: 'firstName',
						data: ctx.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" className="btn" disabled={!ctx.data.password?.valid} onClick={(e) => {
					e.preventDefault();
					props.setState({
						currentPage: 'password2',
						data: ctx.data
					});
				}}>
					Next
				</button>
			</div>
		</form>
	)
}
