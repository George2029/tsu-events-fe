import { EventType } from '@/app/classes/events/enums/eventType.enum';
import { Type } from 'class-transformer';
import { EventStatus } from '@/app/classes/events/enums/eventStatus.enum';

export class Event {
	id: number;
	type: EventType;
	title: string;
	location: string;
	userId: number;
	placesTotal: number;
	status: EventStatus;

	@Type(() => Date)
	startTime: Date;

	@Type(() => Date)
	endTime: Date;

	rating: number;

	@Type(() => Date)
	createdAt: Date;

	@Type(() => Date)
	updatedAt: Date;

	description?: string;

	constructor(
		id: number,
		type: EventType,
		title: string,
		location: string,
		userId: number,
		placesTotal: number,
		status: EventStatus,
		startTime: Date,
		endTime: Date,
		rating: number,
		createdAt: Date,
		updatedAt: Date,
		description?: string
	) {
		this.id = id;
		this.type = type;
		this.title = title;
		this.location = location;
		this.userId = userId;
		this.placesTotal = placesTotal;
		this.status = status;
		this.startTime = startTime;
		this.endTime = endTime;
		this.rating = rating;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.description = description;
	}
}
