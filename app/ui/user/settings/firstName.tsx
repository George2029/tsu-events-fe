'use client'

import { useState, useRef, useEffect, KeyboardEvent, MouseEvent, ChangeEvent, FocusEvent } from 'react';
import updateFirstName from '@/app/actions/user/update/updateFirstName';
import { useModalPortal } from '@/app/ui/ModalContext';

import { UserIcon } from '@/app/ui/icons/icons';
import { PencilMicro, CheckMicro, XIconMicro } from '@/app/ui/icons/microIcons';

function Test({ props }: { props: { text: string, valid: boolean } }) {
	let { valid, text } = props;
	let [clicked, setClicked] = useState(false);
	return (
		!clicked && <div onClick={() => setClicked(true)} className="w-screen h-screen fixed z-50">
			<span className={`max-w-xl absolute left-10 bottom-10 text-ellipsis overflow-x-auto right-10 bg-cardBG dark:bg-darkcardBG ${valid ? 'ring-green-500' : 'ring-red-500'} ring-1 p-3 rounded-lg`}>{text}</span>
		</div>
	)
}

export default function({ props }: { props: { firstName: string } }) {

	let { firstName } = props;

	let [isEditPressed, setIsEditPressed] = useState(false);
	let inputRef = useRef<HTMLInputElement>(null);
	let modalKey = useRef(1);
	let isUpdateActivated = useRef(false);
	let valueRef = useRef(firstName);


	let [inputState, setInputState] = useState(firstName);

	let { setModalContext } = useModalPortal();

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if ((e.target.value.length < 30) && e.target.value.trim() != inputState) {
			setInputState(e.target.value)
		}
	}

	const onInputFocus = (e: FocusEvent<HTMLInputElement>) => {
		let temp_value = e.target.value
		e.target.value = ''
		e.target.value = temp_value
	}

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Escape") {
			setIsEditPressed(false);
			setInputState(valueRef.current)
		}
	}

	const onButtonOkClick = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (isUpdateActivated.current) {
			return;
		}
		isUpdateActivated.current = true;

		let value = inputRef.current?.value;

		if (!value) {
			return
		}

		if (valueRef.current === value) {
			setIsEditPressed(false);
		} else {
			let res = await updateFirstName(value);
			if (res) {
				setModalContext(<Test key={modalKey.current} props={{ text: `Username updated!`, valid: true }} />);
				setIsEditPressed(false);
				valueRef.current = value;
			} else {
				setModalContext(<Test key={modalKey.current} props={{ text: `Something went wrong!`, valid: false }} />);
			}

			modalKey.current++;
		}
		isUpdateActivated.current = false;
	}

	useEffect(() => {
		if (isEditPressed) {
			inputRef.current?.focus();
		}

		return () => inputRef.current?.blur();

	}, [isEditPressed]);

	return (
		<form className="flex items-center justify-between gap-4">
			<div className="flex items-center gap-4">
				<div className="text-specialIcons dark:text-darkspecialIcons">{UserIcon}</div>
				<input onFocus={onInputFocus} ref={inputRef} disabled={!isEditPressed} onKeyDown={onKeyDown} onChange={onInputChange} className="focus:ring-0 px-0 py-0 border-0 bg-transparent w-40 text-sm text-nowrap overflow-x-auto" value={inputState} />
			</div>
			<div className="flex gap-2">
				<button className={`${isEditPressed ? '' : 'hidden'} text-green-500`} type="submit" onClick={onButtonOkClick}>
					{CheckMicro}
				</button>

				<button type="button" onClick={() => {
					setIsEditPressed(e => !e);
					setInputState(valueRef.current)
				}
				}>
					{isEditPressed ? <div className="text-red-500">{XIconMicro}</div> : PencilMicro}
				</button>
			</div>
		</form>
	)
}
