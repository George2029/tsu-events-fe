'use client'
import { useRouter } from 'next/navigation';
//import { EventType } from '@/app/classes/events/enums/eventType.enum';
import getEventsOrRequestsPreviewDataWithOwnerData from '@/app/actions/getEventsOrRequestsPreviewDataWithOwnerData';
import { useEffect, useReducer, useState } from 'react';
import type { EventOrRequestPreviewWithOwnerData } from '@/app/types/EventOrRequestPreview';
import LoadingSkeleton from '@/app/ui/globals/EventsOrRequestsLoadingSkeleton'

import ListItem from '@/app/ui/ListItem';
import { usePathname, useSearchParams } from 'next/navigation'

let chunk = {
	number: 1
}

export default function Events({ props }: { props: { limit?: number, data: EventOrRequestPreviewWithOwnerData[] } }) {

	let { data, limit } = props;
	limit = limit || 30;
	let pathname = usePathname();
	const router = useRouter();

	//	const [state, dispatch] = useReducer(reducer, { initialData: data, limit }, createInitialState);

	let [state, setState] = useState<{ data: EventOrRequestPreviewWithOwnerData[], moreData: boolean }>({ data: [], moreData: false });

	let onScroll = (event: Event) => {
		let vp = event.target as VisualViewport;
		let halfOfTheBlockheight = limit * 110;
		let totalHeightOfTheBlock = chunk.number * limit * 221;
		let middleOfTheBlockPageTop = totalHeightOfTheBlock - halfOfTheBlockheight;
		if (vp.pageTop > middleOfTheBlockPageTop) {
			window.visualViewport?.removeEventListener('scroll', onScroll, false);
			chunk.number = chunk.number + 1;
			return fetchData();
		}
	};

	let fetchData = async () => {
		console.log(`Events: `, state.data);
		let newData = await getEventsOrRequestsPreviewDataWithOwnerData({ limit, offset: (chunk.number - 1) * limit });
		setState({ data: [...state.data, ...newData], moreData: newData.length === limit });
	}

	useEffect(() => {
		chunk.number = 1;
		console.log(`Events: empty useEffect`);
		setState({ data, moreData: data.length === limit });
		window.visualViewport?.removeEventListener('scroll', onScroll, false);
	}, [pathname]);

	useEffect(() => {
		console.log('Events: state.data use effect, chunk number: ', chunk.number);
		state.moreData && window.visualViewport?.addEventListener('scroll', onScroll, false);
	}, [state.data]);



	return (
		<ul>
			{state.data.map((item) => <ListItem props={{ item }} />)}
			{state.moreData && <LoadingSkeleton />}
		</ul>

	)
}


