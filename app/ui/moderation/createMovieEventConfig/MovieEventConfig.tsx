'use client'

import { useState } from 'react';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

import Audio from './Audio';
import Subtitles from './Subtitles';
import Title from './Title';
import Description from './Description';
import Url from './Url';
import Duration from './Duration';

let i = 0;

export default function MovieEventConfig({ props }: { props: { eventType: string } }) {

	let arr: number[] = [];
	let [movieEventConfigState, setMovieEventConfigState] = useState(arr);

	return (
		<div className={`leading-6 ${props.eventType === EventType.MOVIE_EVENT ? '' : 'hidden'} `}>
			<div
				onClick={
					() => setMovieEventConfigState((e) => {
						return [...e, ++i];
					})
				}
				className="p-2 rounded-lg bg-teal-950 flex justify-between border hover:border-indigo-500"
			>

				<div className="self-center">Add movie event config</div>
				<div className="w-8 h-8 rounded-full text-center bg-neutral-950 p-1">{movieEventConfigState.length}</div>
			</div>
			<input type="hidden" name="movieConfigIds" value={movieEventConfigState.join(',')} />
			{[...movieEventConfigState].map((id) => {
				return (
					<div key={id} className="mt-4 space-y-4 p-4 rounded bg-neutral-950">
						<Title props={{ id }} />
						<Description props={{ id }} />
						<Url props={{ id }} />
						<Duration props={{ id }} />
						<Audio props={{ id }} />
						<Subtitles props={{ id }} />
						<div
							className="p-4 rounded-xl text-red-500 hover:text-red-500/50 bg-black"
							onClick={() => setMovieEventConfigState(arr => {
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
