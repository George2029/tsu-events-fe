'use client'
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { EventOrRequestPreviewWithOwnerData } from '@/app/types/EventOrRequestPreview';
import LoadingSkeleton from '@/app/ui/globals/EventsOrRequestsLoadingSkeleton'

import ListItem from '@/app/ui/ListItem';



export default function Requests({ props }: { props: { limit?: number, data: EventOrRequestPreviewWithOwnerData[] } }) {

	let { data, limit } = props;
	limit = limit || 30;
	let router = useRouter();

	//	const [state, dispatch] = useReducer(reducer, { initialData: data, limit }, createInitialState);
	let chunk = useRef(1);
	let dataStorage = useRef({ data, moreData: data.length === limit });
	let [state, _setState] = useState<{ data: EventOrRequestPreviewWithOwnerData[], moreData: boolean }>({ data, moreData: data.length === limit });

	const setState = (state: { data: EventOrRequestPreviewWithOwnerData[], moreData: boolean }) => {
		dataStorage.current = state;
		_setState(state);
	}

	let onScroll = (event: Event) => {
		let vp = event.target as VisualViewport;
		let halfOfTheBlockheight = limit * 110;
		let totalHeightOfTheBlock = chunk.current * limit * 221;
		let middleOfTheBlockPageTop = totalHeightOfTheBlock - halfOfTheBlockheight;
		console.log(middleOfTheBlockPageTop)
		if (vp.pageTop > middleOfTheBlockPageTop) {
			chunk.current = chunk.current + 1;
			return fetchData();
		}
	};

	let fetchData = async () => {
		let newData = await getEventsOrRequestsPreviewDataWithOwnerData({ limit, offset: (chunk.current - 1) * limit, requests: true });
		console.log(`Requests: stateData: `, state.data);
		console.log(`Requests: newData: `, newData);
		setState({ data: [...dataStorage.current.data, ...newData], moreData: newData.length === limit });
	}

	useEffect(() => {
		window.visualViewport?.addEventListener('scroll', onScroll, false);

		return () => window.visualViewport?.removeEventListener("scroll", onScroll) // This removes the event listener when the user navigates away from this component.
	}, []);




	return (
		<ul>
			{state.data.map((item) => <ListItem key={item.id} props={{ item }} />)}
			{state.moreData && <LoadingSkeleton />}
		</ul>

	)
}


/*function createInitialState(setup: { initialData: EventOrRequestPreviewWithOwnerData[], limit: number }) {
	let { initialData, limit } = setup;
	chunk.current = 1;
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
}*/

