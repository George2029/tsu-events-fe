'use client'
import { useState, useRef, useEffect } from 'react';

import { MailIcon } from '@/app/ui/icons/icons';
import { PencilMicro } from '@/app/ui/icons/microIcons';

export default function({ props }: { props: { email: string } }) {

	let [isEditPressed, setIsEditPressed] = useState(false);
	let inputRef = useRef<HTMLInputElement>(null);
	let { email } = props;
	let [inputState, setInputState] = useState({ message: '', value: email });

	useEffect(() => {

		if (isEditPressed) {
			inputRef.current?.focus();
		}

		return () => inputRef.current?.blur();

	}, [isEditPressed]);

	return (
		<>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-4">
					<div className="text-specialIcons dark:text-darkspecialIcons">{MailIcon}</div>
					<div className="text-sm text-nowrap overflow-x-auto">{email}</div>
				</div>
				<button onClick={() => setIsEditPressed(e => !e)}>{PencilMicro}</button>
			</div>
			<form className={`${!isEditPressed ? 'hidden' : ''}`}>
				<div className="flex justify-between">
					<label htmlFor="email">New Email</label>
					<button type="button" onClick={() => setIsEditPressed(false)}>Close</button>
				</div>

				<div className="flex justify-between">
					<input className="custom-input" id="email" ref={inputRef} value={inputState.value} onChange={(e) => {
						setInputState({ message: '', value: e.target.value });
					}} />
					<button type="submit" onClick={(e) => {
						e.preventDefault();
						if (!inputRef.current?.value) {
							return
						}
						if (email === inputRef.current.value) {
							setIsEditPressed(false);
						} else {
							setInputState({ message: 'update!', value: inputRef.current.value });
						}
					}}>Update</button>
				</div>

				<div>{inputState.message}</div>
			</form>
		</>
	)
}
