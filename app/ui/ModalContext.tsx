'use client'

import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

type ModalContext = {
	modalContext: React.ReactElement,
	setModalContext: Dispatch<SetStateAction<React.ReactElement>>
}

let defaultModalContext = {
	modalContext: <div>GG from Modal!</div>,
	setModalContext: () => <div>setModalContext!!</div>
}

export let ModalContext = createContext<ModalContext>(defaultModalContext);

export default function ModalProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
	let [modalContext, setModalContext] = useState(<></>);

	return (
		<ModalContext.Provider value={{ modalContext, setModalContext }}>
			{modalContext}
			{children}
		</ModalContext.Provider>
	)

}

export let useModalPortal = () => {
	return useContext(ModalContext);
}
