'use client'

import { ChevronDownIcon } from '@/app/ui/icons/icons';
import { useState } from 'react';
import Link from 'next/link';

type Genre = {
	title: string;
	options: { title: string, href: string }[];
}

export default function Genre({ ...props }: Genre) {

	let [chevronState, setChevronState] = useState(false);

	return (
		<div className="select-none z-20 md:mt-7 w-44 relative rounded-lg ml-4 md:ml-0">
			<div className={`${chevronState ? "" : "hidden"} md:hidden fixed bg-black/80 inset-0`}></div>
			<div className="overflow-hidden dark:bg-darkgenreBarBG bg-genreBarBG absolute flex flex-col w-full rounded-lg ring-1 ring-border dark:ring-darkborder dark:hover:ring-darkactive hover:ring-active">
				<div onClick={() => setChevronState(e => !e)} className={
					`w-full p-3 rounded justify-between flex align-center gap-2 cursor-pointer`
				} >
					<div className="">{props.title}</div>
					<div className={`${chevronState ? 'rotate-180' : 'rotate-0'} duration-300 self-center`}>{ChevronDownIcon}</div>
				</div>
				<div className={`${chevronState ? "max-h-60" : "max-h-0"} -top-1 duration-300 rounded relative`}>
					{props.options.map(option => {
						return (
							<Link href={option.href} key={option.title} className="block rounded-lg m-2 p-1 hover:ring-1 hover:text-active dark:hover:text-darkactive">
								{option.title}
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
