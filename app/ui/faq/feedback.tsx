'use client'

import { useState } from 'react';

export default function({ props }: { props: { feedbackOption: { link: string, icon: any } } }) {

	let { link, icon } = props.feedbackOption;

	let [modalIsOpen, setIsOpen] = useState(false);

	return (
		<button className="active:scale-75 md:active:scale-90 duration-300 hover:text-active dark:hover:text-darkactive " onClick={() => {
			navigator.clipboard.writeText(link)
		}}>
			{icon}
		</button>
	)
}



