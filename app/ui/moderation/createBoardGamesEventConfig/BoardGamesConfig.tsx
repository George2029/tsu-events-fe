'use client'

import { useState } from 'react';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

let i = 0;

import Title from './Title';
import Description from './Description';
import MaxPlayers from './MaxPlayers';

export default function BoardGamesEventConfig({ props }: { props: { eventType: string } }) {

	let arr: number[] = [];
	let [boardGamesEventConfigState, setBoardGamesEventConfigState] = useState(arr);

	return (
		<div className={`leading-6 ${props.eventType === EventType.BOARD_GAMES_EVENT ? '' : 'hidden'} `}>
			<div
				onClick={
					() => setBoardGamesEventConfigState((e) => {
						return [...e, ++i];
					})
				}
				className="p-2 rounded-lg bg-teal-950 flex justify-between border hover:border-indigo-500"
			>

				<div className="self-center">Add Board Game Config</div>
				<div className="w-8 h-8 rounded-full text-center bg-neutral-950 p-1">{boardGamesEventConfigState.length}</div>
			</div>
			<input type="hidden" name="boardGamesConfigIds" value={boardGamesEventConfigState.join(',')} />
			{[...boardGamesEventConfigState].map((id) => {
				return (
					<div key={id} className="mt-4 space-y-4 p-4 rounded bg-neutral-950">
						<Title props={{ id }} />
						<Description props={{ id }} />
						<MaxPlayers props={{ id }} />
						<div
							className="p-4 rounded-xl text-red-500 hover:text-red-500/50 bg-black"
							onClick={() => setBoardGamesEventConfigState(arr => {
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
