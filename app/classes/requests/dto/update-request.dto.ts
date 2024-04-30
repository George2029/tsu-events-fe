import { IsOptional, IsEnum, IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { EventType } from './../../events/enums/eventType.enum';
import { RequestStatus } from './../enums/requestStatus.enum';

export class UpdateRequestDto {
	@IsOptional()
	@IsNotEmpty()
	@IsString()
	title?: string;

	@IsOptional()
	@IsNotEmpty()
	@IsString()
	description?: string | null;

	@IsOptional()
	@IsNotEmpty()
	@IsString()
	location?: string;

	@IsOptional()
	@IsEnum(EventType)
	type?: EventType;

	@IsOptional()
	@IsEnum(RequestStatus)
	status?: RequestStatus;

	@IsOptional()
	@Type(() => Date)
	@IsDate()
	startTime?: Date;

	@IsOptional()
	@Type(() => Date)
	@IsDate()
	endTime?: Date;

	@IsOptional()
	@Type(() => Date)
	@IsDate()
	endOfRequestTime?: Date;

	constructor(
		description?: string | null,
		title?: string,
		type?: EventType,
		status?: RequestStatus,
		startTime?: Date,
		endTime?: Date,
		location?: string,
		endOfRequestTime?: Date,
	) {
		this.title = title;
		this.type = type;
		this.startTime = startTime;
		this.endTime = endTime;
		this.location = location;
		this.description = description;
		this.status = status;
		this.endOfRequestTime = endOfRequestTime;
	}
}
