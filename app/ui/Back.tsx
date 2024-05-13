'use client';

import { GoBackIcon } from '@/app/ui/icons';
import { useEffect, useRef } from 'react';

export default function Back() {
	let ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, []);

	return (
		<button ref={ref} onKeyDown={(e) => {
			console.log(e.key);
			if (e.key === "Escape") {
				if (ref.current) {
					ref.current.click();
				}
			}
		}} onClick={() => window.history.back()} className="outline-none w-fit md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder mt-4 flex p-2 items-center gap-2 rounded-lg"><span>Back</span>{GoBackIcon}</button>
	)
}
