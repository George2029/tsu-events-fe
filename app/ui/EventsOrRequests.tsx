'use client'

import { EventType } from '@/app/classes/events/enums/eventType.enum';
import ListItem from './ListItem';
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import { useState, useRef } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingItem } from '@/app/ui/globals/EventsOrRequestsLoadingSkeleton'
import type { EventOrRequestPreviewWithOwnerData } from '@/app/types/EventOrRequestPreview';

export default function EventsOrRequests({ props }: { props: { eventType?: EventType, requests?: boolean, data: EventOrRequestPreviewWithOwnerData[] } }) {

	let { data, requests, eventType } = props;

	const [state, setState] = useState<{ data: EventOrRequestPreviewWithOwnerData[], moreData: boolean }>({ data, moreData: data.length === 30 });

	let chunk = useRef(1);

	let fetchData = async () => {
		chunk.current = chunk.current + 1;
		let newData = await getEventsOrRequestsPreviewDataWithOwnerData({ offset: (chunk.current - 1) * 30, requests, eventType });
		let newState = { data: [...state.data, ...newData], moreData: newData.length === 30 };
		setState(newState);
	}


	return (
		<InfiniteScroll
			dataLength={state.data.length}
			next={fetchData}
			hasMore={state.moreData}
			loader={<LoadingItem />}
		>
			<ul>
				{state.data.map((item: EventOrRequestPreviewWithOwnerData) => <ListItem key={item.id} props={{ requests, item }} />)}
			</ul>
		</InfiniteScroll>

	)
}
