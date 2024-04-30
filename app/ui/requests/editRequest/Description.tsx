'use client'
import { useState, useRef } from 'react';
import { XIconMicro, PencilMicro } from '@/app/ui/microIcons';

export default function Description({ props }: { props: { existingValue?: string } }) {
	let inputRef = useRef<HTMLTextAreaElement | null>(null);
	let { existingValue } = props;
	const [state, setState] = useState(!!existingValue);

	return (
		<>
			<div className={``}>
				<div className="flex gap-2">
					<label htmlFor="description" className={`${state ? 'block' : 'hidden'} text-sm font-semibold mr-4`}>Description</label>
					<div className="hover:text-active dark:hover:text-darkactive text-sm flex gap-2 cursor-pointer text-sm font-semibold" onClick={() => {
						setState(s => {
							if (s === true) {
								if (inputRef.current) {
									inputRef.current.value = 'null';
								}
								return !s;
							} else {
								if (inputRef.current) {
									inputRef.current.value = '';
								}
								return !s;
							}
						})
					}}>
						<div className="">{state ? 'Delete' : 'Add a description'}</div>
						<div className="self-center">
							{state ? XIconMicro : PencilMicro}
						</div>
					</div>
				</div>
				<div className={`${state ? 'block' : 'hidden'} mt-1`}>
					<textarea
						ref={inputRef}
						id="description"
						name="description"
						rows={3}
						className="w-full block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
						placeholder={existingValue ? existingValue : ''}
						required
						maxLength={1000}
					/>
					<p className="mt-1 text-sm leading-6 text-gray-500">Write a few sentences about event</p>
				</div>
			</div>
		</>
	)
}
