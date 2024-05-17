'use client'

import { EventType } from '@/app/classes/events/enums/eventType.enum';
import ListItem from './ListItem';
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import { useEffect, useState, useRef } from 'react';
import type { EventOrRequestPreviewWithOwnerData } from '@/app/types/EventOrRequestPreview';

export default function EventsOrRequests({ props }: { props: { eventType?: EventType, requests?: boolean, data: EventOrRequestPreviewWithOwnerData[] } }) {

	let { data, requests, eventType } = props;

	const [state, _setState] = useState<{ data: EventOrRequestPreviewWithOwnerData[], moreData: boolean }>({ data, moreData: data.length === 30 });

	let chunk = useRef(1);
	let dataStorage = useRef<{ data: EventOrRequestPreviewWithOwnerData[], moreData: boolean }>({ data, moreData: data.length === 30 });

	let onScroll = (event: Event) => {
		let vp = event.target as VisualViewport;
		if (vp.pageTop > chunk.current * 5200 - 2500) {
			chunk.current = chunk.current + 1;
			console.log('ttl', 'chunk.current to load: ', chunk.current);
			return fetchData();
		}
	};


	let fetchData = async () => {
		let newData = await getEventsOrRequestsPreviewDataWithOwnerData({ offset: (chunk.current - 1) * 30, requests, eventType });
		let newState = { data: [...dataStorage.current.data, ...newData], moreData: newData.length === 30 };
		dataStorage.current = newState;
		_setState(newState);
	}

	useEffect(() => {
		console.log('use effect', chunk.current);
		window.visualViewport?.addEventListener('scroll', onScroll, true);
		return () => window.visualViewport?.removeEventListener('scroll', onScroll, true);
	}, []);

	return (
		<ul>
			{
				state.data.map((item: EventOrRequestPreviewWithOwnerData) => <ListItem key={item.id} props={{ requests, item }} />)}

			{
				state.moreData && <div className="space-y-2 mt-6 dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg">
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
				</div>
			}
		</ul>

	)
}
