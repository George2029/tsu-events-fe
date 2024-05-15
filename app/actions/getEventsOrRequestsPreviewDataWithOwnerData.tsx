'use server'

import { EventType } from '@/app/classes/events/enums/eventType.enum';
import type { EventOrRequestPreviewWithOwnerData } from '@/app/types/EventOrRequestPreview';

export default async function getAllEventsOrRequestsPreviewDataWithOwnerData(options?: { requests?: boolean, eventType?: EventType, offset?: number }): Promise<EventOrRequestPreviewWithOwnerData[]> {
	let dataType = options?.requests ? 'requests' : 'events';
	let type = options?.eventType;
	let offset = options?.offset;

	let params: { type?: EventType, offset?: string } = {};

	if (type) params.type = type;
	if (offset) params.offset = String(offset);

	let url = `http://localhost:3000/${dataType}?` + new URLSearchParams(params);

	const res = await fetch(url, {
		cache: 'no-store'
	});

	let b = new Promise((res, rej) => setTimeout(() => res(1), 5000));
	await b;

	return res.json();

}
