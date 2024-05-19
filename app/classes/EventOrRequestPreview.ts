import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { Type } from 'class-transformer';

export class EventOrRequestPreview {
	id: number;

	userId: number;

	type: EventType;

	title: string;

	location: string;

	@Type(() => Date)
	createdAt: Date;

	@Type(() => Date)
	startTime: Date;

	constructor(
		id: number,
		userId: number,
		type: EventType,
		title: string,
		location: string,
		startTime: Date,
		createdAt: Date,
	) {
		this.id = id;
		this.userId = userId;
		this.type = type;
		this.title = title;
		this.location = location;
		this.startTime = startTime;
		this.createdAt = createdAt;
	}
}

