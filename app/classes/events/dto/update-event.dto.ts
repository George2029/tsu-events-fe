import { EventStatus } from './../enums/eventStatus.enum';

import { IsOptional, IsString, IsInt, IsEnum, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { EventType } from './../enums/eventType.enum';

export class UpdateEventDto {
	@IsOptional()
	@IsNotEmpty()
	@IsString()
	title?: string;

	@IsOptional()
	@IsEnum(EventType)
	type?: EventType;

	@IsOptional()
	@IsNotEmpty()
	@IsString()
	location?: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsInt()
	placesTotal?: number;

	@IsOptional()
	@IsEnum(EventStatus)
	status?: EventStatus;

	@IsOptional()
	@Type(() => Date)
	@IsDate()
	startTime?: Date;

	@IsOptional()
	@Type(() => Date)
	@IsDate()
	endTime?: Date;

	constructor(
		title?: string,
		description?: string,
		location?: string,
		type?: EventType,
		placesTotal?: number,
		status?: EventStatus,
		startTime?: Date,
		endTime?: Date
	) {
		this.title = title;
		this.description = description;
		this.location = location;
		this.type = type;
		this.placesTotal = placesTotal;
		this.status = status;
		this.startTime = startTime;
		this.endTime = endTime;
	}

}

