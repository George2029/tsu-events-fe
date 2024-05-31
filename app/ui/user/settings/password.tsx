'use client'

import { useState, useRef, MouseEvent, ChangeEvent } from 'react';
import { useModalPortal } from '@/app/ui/ModalContext';
import updatePassword from '@/app/actions/user/update/updatePassword';

import { KeyIcon } from '@/app/ui/icons/icons'
import { ChevronDownMicro } from '@/app/ui/icons/microIcons';

function Test({ props }: { props: { text: string, valid: boolean } }) {
	let { valid, text } = props;
	let [clicked, setClicked] = useState(false);
	return (
		!clicked && <div onClick={() => setClicked(true)} className="w-screen h-screen fixed z-50">
			<span className={`max-w-xl absolute left-10 bottom-10 text-ellipsis overflow-x-auto right-10 bg-cardBG dark:bg-darkcardBG ${valid ? 'ring-green-500' : 'ring-red-500'} ring-1 p-3 rounded-lg`}>{text}</span>
		</div>
	)
}

export default function() {
	let [isEditPressed, setIsEditPressed] = useState(false);
	let [oldPasswordValue, setOldPasswordValue] = useState('');
	let [newPasswordValue, setNewPasswordValue] = useState('');
	let { setModalContext } = useModalPortal();

	let isUpdateButtonActivated = useRef(false);
	let modalKey = useRef(1);

	function onClick() {
		setIsEditPressed(clicked => !clicked);
	}

	async function onButtonClick(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		if (isUpdateButtonActivated.current) {
			return;
		}

		isUpdateButtonActivated.current = true;

		if (newPasswordValue.length < 12) {
			setModalContext(<Test key={modalKey.current} props={{ text: `Password should 12+ chars!`, valid: false }} />);
			modalKey.current++;
			isUpdateButtonActivated.current = false;
			return;
		}

		let res = await updatePassword(oldPasswordValue, newPasswordValue);
		if (res) {
			setModalContext(<Test key={modalKey.current} props={{ text: `Password is updated!`, valid: true }} />);
		} else {
			setModalContext(<Test key={modalKey.current} props={{ text: `Something went wrong!`, valid: false }} />);
		}

		setIsEditPressed(false);
		setOldPasswordValue('');
		setNewPasswordValue('');
		modalKey.current++;
		isUpdateButtonActivated.current = false;
	}


	function onOldPasswordChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.value.trim() != oldPasswordValue) {
			setOldPasswordValue(e.target.value);
		}
	}

	function onNewPasswordChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.value.trim() != newPasswordValue) {
			setNewPasswordValue(e.target.value);
		}
	}

	return (
		<div>
			<div className="flex justify-between">
				<div className="flex gap-4 items-center ">
					<div className="text-specialIcons dark:text-darkspecialIcons">{KeyIcon}</div>
					<div className="text-sm">Password</div>
				</div>
				<button type="button" className={`${isEditPressed ? 'rotate-180' : 'rotate-0'} duration-300 self-center`} onClick={onClick}>{ChevronDownMicro}</button>
			</div>
			<form className={`${isEditPressed ? '' : 'hidden'} mt-5 flex flex-col items-center`}>
				<input className="custom-input" type="password" placeholder="Old password" value={oldPasswordValue} onChange={onOldPasswordChange} />
				<input className="custom-input" type="password" placeholder="New password" value={newPasswordValue} onChange={onNewPasswordChange} />
				<button type="submit" className="btn" onClick={onButtonClick}>Update</button>
			</form>
		</div>
	)
}
