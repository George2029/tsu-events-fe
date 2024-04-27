'use client'

import { useState } from 'react';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

let i = 0;

import Title from './Title';
import Description from './Description';

export default function CustomEventConfig({ props }: { props: { eventType: string } }) {

	let arr: number[] = [];
	let [customEventConfigState, setCustomEventConfigState] = useState(arr);

	return (
		<div className={`leading-6 ${props.eventType === EventType.CUSTOM_EVENT ? '' : 'hidden'} `}>
			<div
				onClick={
					() => setCustomEventConfigState((e) => {
						return [...e, ++i];
					})
				}
				className="p-2 rounded-lg bg-teal-950 flex justify-between border hover:border-indigo-500"
			>

				<div className="self-center">Add Custom Config</div>
				<div className="w-8 h-8 rounded-full text-center bg-neutral-950 p-1">{customEventConfigState.length}</div>
			</div>
			<input type="hidden" name="customConfigIds" value={customEventConfigState.join(',')} />
			{[...customEventConfigState].map((id) => {
				return (
					<div key={id} className="mt-4 space-y-4 p-4 rounded bg-neutral-950">
						<Title props={{ id }} />
						<Description props={{ id }} />
						<div
							className="p-4 rounded-xl text-red-500 hover:text-red-500/50 bg-black"
							onClick={() => setCustomEventConfigState(arr => {
								return arr.filter(elem => elem !== id);
							}
							)}>
							Delete Config
						</div>

					</div>
				)
			}
			)}
		</div>
	)
}
