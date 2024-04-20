'use client'

import { ChevronDownIcon } from './icons';
import { useState } from 'react';
import Link from 'next/link';

type Genre = {
	title: string;
	options: { title: string, href: string }[];
}

export default function Genre({ ...props }: Genre) {

	let [chevronState, setChevronState] = useState(false);

	return (
		<div className="select-none w-44 p-3 rounded-lg ml-4 md:ml-0">
			<div className={`${chevronState ? "" : "hidden"} md:hidden bg-black/80 fixed inset-0`}></div>
			<div className="overflow-hidden space-y-4 flex flex-col">
				<div onClick={() => setChevronState(e => !e)} className={
					`w-full p-2 rounded-lg bg-teal-950 justify-between flex bg-teal-950 align-center z-20 gap-2 border hover:border-indigo-500`
				} >
					<div className="">{props.title}</div>
					<div className={`${chevronState ? 'rotate-180' : 'rotate-0'} duration-300 self-center`}>{ChevronDownIcon}</div>
				</div>
				<div className={`${chevronState ? "-top-0" : "-top-40"} rounded-lg p-2 bg-teal-950  duration-300 relative z-10`}>
					{props.options.map(option => {
						return (
							<div key={option.title} className="rounded-lg p-1 hover:ring-1 hover:text-selected hover:ring-indigo-500">
								<Link href={option.href}>{option.title}</Link>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
