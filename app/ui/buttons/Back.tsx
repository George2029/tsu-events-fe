'use client';

import { GoBackIcon } from '@/app/ui/icons/icons';
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
		}} onClick={() => window.history.back()} className="btn"><span>Back</span>{GoBackIcon}</button>
	)
}
