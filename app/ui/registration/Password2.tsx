import { useContext, useRef, useEffect } from 'react';

import { GoBackIcon } from '@/app/ui/icons/icons';
import RegistrationContext from './RegistrationContext';
import type { RegistrationContextObject } from './RegistrationContext';

export default function Password2({ props }: { props: { setState: (obj: RegistrationContextObject) => void } }) {

	const ctx = useContext(RegistrationContext);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
		return () => inputRef.current?.blur();
	}, [ctx.currentPage !== 'password2']);

	let { setState } = props;

	return (
		<form className={`${(ctx.currentPage !== 'password2') && 'hidden'}`}>
			<label htmlFor="password2" className="custom-label">
				<span>
					Password again
				</span>
				<input
					ref={inputRef}
					id="password2"
					type="password"
					className={`${ctx.data.password2?.valid && '!ring-green-500'}`}
					value={ctx.data.password2?.value}
					onChange={(e) => {
						let { value } = e.target;
						if (e.target.value === ctx.data.password?.value) {
							setState({
								currentPage: ctx.currentPage,
								data: {
									...ctx.data,
									password2: {
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
					props.setState({
						currentPage: 'password',
						data: ctx.data,
					});

				}} className="btn">
					<span>Back</span>{GoBackIcon}
				</button>
				<button type="submit" className="btn" disabled={!ctx.data.password2?.valid} onClick={(e) => {
					e.preventDefault();
					props.setState({
						currentPage: 'email',
						data: ctx.data
					});
				}}>
					Next
				</button>
			</div>
		</form>
	)
}
