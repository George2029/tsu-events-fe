'use client'

import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import { useEffect, useReducer } from 'react';
import type { EventOrRequestPreviewWithOwnerData } from '@/app/types/EventOrRequestPreview';
import LoadingSkeleton from '@/app/ui/globals/EventsOrRequestsLoadingSkeleton'

import ListItem from '@/app/ui/ListItem';

function createInitialState(setup: { initialData: EventOrRequestPreviewWithOwnerData[], limit: number }) {
	let { initialData, limit } = setup;
	chunk.number = 1;
	return {
		todos: initialData,
		moreData: initialData.length === limit
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
export default function EventsOrRequests({ props }: { props: { limit?: number, data: EventOrRequestPreviewWithOwnerData[] } }) {

	let { data, limit } = props;

	limit = limit || 30;
	const [state, dispatch] = useReducer(reducer, { initialData: data, limit }, createInitialState);

	let onScroll = (event: Event) => {
		let vp = event.target as VisualViewport;
		let halfOfTheBlockheight = limit * 110;
		let totalHeightOfTheBlock = chunk.number * limit * 221;
		let middleOfTheBlockPageTop = totalHeightOfTheBlock - halfOfTheBlockheight;
		if (vp.pageTop > middleOfTheBlockPageTop) {
			window.visualViewport?.removeEventListener('scroll', onScroll, true);
			chunk.number = chunk.number + 1;
			console.log('ttl', 'chunk.number to load: ', chunk.number);
			return fetchData();
		}
	};

	let fetchData = async () => {
		console.log('fetch');
		let newData = await getEventsOrRequestsPreviewDataWithOwnerData({ limit, offset: (chunk.number - 1) * limit, requests: true, eventType: EventType.CUSTOM_EVENT });
		console.time();
		console.log(newData, data);
		dispatch({ newData, moreData: newData.length === limit });
	}

	useEffect(() => {
		console.timeEnd();
		console.log('use effect', chunk.number);
		state.moreData && window.visualViewport?.addEventListener('scroll', onScroll, true);
	}, [state.todos]);

	return (
		<ul>
			{state.todos.map((item) => <ListItem props={{ item }} />)}
			{state.moreData && <LoadingSkeleton />}
		</ul>

	)
}


