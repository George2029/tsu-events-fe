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

	let url = `http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/${dataType}?` + new URLSearchParams(params);
	let tags: string[] = [];
	if (type) {
		tags.push(dataType + type); // gets revalidated if only dataType preview of that type specific type is changed, or dataType of that type is deleted or a new one inserted 
	} else {
		tags.push(dataType); // gets revalidated if any dataType preview is changed, or new one is inserted 
	}

	const res = await fetch(url, { next: { tags } });

	return res.json();

}
