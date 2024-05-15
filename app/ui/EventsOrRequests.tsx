'use client'

import { DateTime } from "luxon";
import Link from "next/link";
import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon } from '@/app/ui/icons/eventsBarIcons';
import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import { useEffect, useReducer } from 'react';
import type { EventOrRequestPreviewWithOwnerData } from '@/app/types/EventOrRequestPreview';

function createInitialState(initialData: EventOrRequestPreviewWithOwnerData[]) {
	chunk.number = 1;
	return {
		todos: initialData,
		moreData: initialData.length === 30
	};
}

function reducer(state: { todos: EventOrRequestPreviewWithOwnerData[], moreData: boolean }, action: { newData: EventOrRequestPreviewWithOwnerData[], moreData: boolean }) {
	return {
		todos: [...state.todos, ...action.newData],
		moreData: action.moreData
	}
}

let chunk = {
	number: 1
}
export default function EventsOrRequests({ props }: { props: { eventType?: EventType, requests?: boolean, data: EventOrRequestPreviewWithOwnerData[] } }) {

	let { data, requests, eventType } = props;

	const [state, dispatch] = useReducer(reducer, data, createInitialState);

	//	const [state, dispatch] = useReducer(reducer, eventsWithUserPreviews,createInitialState);
	//

	let onScroll = (event: Event) => {
		let vp = event.target as VisualViewport;
		if (vp.pageTop > chunk.number * 5200 - 2500) {
			window.visualViewport?.removeEventListener('scroll', onScroll, true);
			chunk.number = chunk.number + 1;
			console.log('ttl', 'chunk.number to load: ', chunk.number);
			return fetchData();
		}
	};

	let fetchData = async () => {
		console.log('fetch');
		let newData = await getEventsOrRequestsPreviewDataWithOwnerData({ offset: (chunk.number - 1) * 30, requests, eventType });
		dispatch({ newData, moreData: newData.length === 30 });
	}

	useEffect(() => {
		console.log('use effect', chunk.number);
		state.moreData && window.visualViewport?.addEventListener('scroll', onScroll, true);
	}, [state.todos]);

	return (
		<ul>
			{
				state.todos.map(
					(item: EventOrRequestPreviewWithOwnerData) => {
						let { id, title, type, location, startTime, userId, createdAt, user: { hue, firstName } } = item;

						let link = `/`;
						link = link + id;
						let eventIcon: any;

						let startTimeString = DateTime.fromJSDate(new Date(startTime)).setLocale('en-US').toLocaleString({
							day: 'numeric',
							month: 'long',
							hour: 'numeric',
							minute: '2-digit'
						});

						let createdAtString = DateTime.fromJSDate(new Date(createdAt)).toLocaleString(DateTime.DATETIME_SHORT, { locale: 'en-US' })

						let iconCaption = '';

						switch (type) {
							case "CUSTOM_EVENT":
								eventIcon = OtherEventIcon;
								iconCaption = 'Custom event';
								break;
							case "MOVIE_EVENT":
								eventIcon = MovieIcon;
								iconCaption = 'Movie event';
								break;
							case "BOARD_GAMES_EVENT":
								eventIcon = BoardGameIcon;
								iconCaption = 'Board games event';
								break;
							case "CONTEST_EVENT":
								eventIcon = ContestIcon;
								iconCaption = 'Contest event';
								break;
						}
						let letter = firstName[0].toUpperCase();

						return (
							<li className="h-[9.25rem]" key={item.id}>

								<div className="space-y-2 mt-6 dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg">
									<div className="flex justify-between gap-2">
										<Link href={link} className="md:active:scale-90 active:scale-75 duration-300 hover:text-active dark:hover:text-darkactive text-title dark:text-darktitle font-bold text-balance">{title}</Link>
										<div custom-attribute={iconCaption} className="relative hover:after:text-center hover:after:z-10 hover:after:absolute hover:after:top-8 hover:after:right-0 hover:after:w-24 text-xs hover:after:bg-background dark:hover:after:bg-darkbackground dark:hover:after:ring-darkactive hover:after:ring-1 hover:after:rounded-lg hover:after:ring-active hover:after:p-2 hover:after:content-[attr(custom-attribute)]">{eventIcon}</div>
									</div>
									<div>{startTimeString}</div>
									<div>{location}</div>
									<div className="flex justify-between items-center text-sm gap-2">
										<div className="flex gap-1 items-center">
											<Link href={`/user/${userId}`} className={`hover:text-active dark:hover:text-darkactive active:scale-90 duration-300 rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-4 h-4 font-bold flex justify-center items-center`}>
												<span className="text-white text-xs drop-shadow-md">
													{letter}
												</span>
											</Link>
											<span>by</span>
											<Link href={`/user/${userId}`} className="hover:text-active dark:hover:text-darkactive active:scale-90 duration-300">{firstName}</Link>
										</div>
										<div className="font-light text-xs">{createdAtString}</div>
									</div>
								</div>

							</li>
						)
					})}
			{state.moreData && <div className="space-y-2 mt-6 dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg">
				<div className="flex justify-between">
					<div className="h-6 w-32 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
					<div className="h-6 w-6 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				</div>
				<div className="h-6 w-20 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				<div className="h-6 w-32 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				<div className="flex justify-between">
					<div className="h-5 w-28 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
					<div className="h-5 w-20 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				</div>
			</div>}
		</ul>

	)
}


//;

/*    <input
		value={state.draft}
		onChange={e => {
		  dispatch({
			type: 'changed_draft',
			nextDraft: e.target.value
		  })
		}}
	  />
	  <button onClick={() => {
		dispatch({ type: 'added_todo' });
	  }}>Add</button>*/


/*const createInitialState = (dataWithUserPreview: EventOrRequestWithUserPreview[]): { base: EventOrRequestWithUserPreview[], newData: EventOrRequestWithUserPreview[] } => {
	return { base: dataWithUserPreview, newData: [] };
}

function reducer(
	state: { base: EventOrRequestWithUserPreview[], newData: EventOrRequestWithUserPreview[] },
	action: { newData: EventOrRequestWithUserPreview[] }): { base: EventOrRequestWithUserPreview[], newData: EventOrRequestWithUserPreview[] } {
	let nextState = {
		base: state.base, newData: [...state.newData, ...action.newData],
	}
	return nextState;
}*/
