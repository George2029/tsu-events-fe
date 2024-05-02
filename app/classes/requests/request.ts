import { EventType } from '@/app/ui/events/enums/eventType.enum';
import { RequestStatus } from '@/app/classes/requests/enums/requestStatus.enum';
import { Type } from 'class-transformer';

export class Request {
	id: number;

	userId: number;

	type: EventType;

	title: string;

	location: string;

	status: RequestStatus;

	@Type(() => Date)
	startTime: Date;

	@Type(() => Date)
	endTime: Date;

	@Type(() => Date)
	createdAt: Date;

	@Type(() => Date)
	updatedAt: Date;

	@Type(() => Date)
	endOfRequestTime: Date;

	description?: string | null;

	constructor(
		id: number,
		userId: number,
		type: EventType,
		title: string,
		location: string,
		status: RequestStatus,
		startTime: Date,
		endTime: Date,
		createdAt: Date,
		updatedAt: Date,
		endOfRequestTime: Date,
		description?: string | null,
	) {
		this.id = id;
		this.userId = userId;
		this.type = type;
		this.title = title;
		this.location = location;
		this.status = status;
		this.startTime = startTime;
		this.endTime = endTime;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.description = description;
		this.endOfRequestTime = endOfRequestTime;
	}
}

export class RequestPreview {
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
