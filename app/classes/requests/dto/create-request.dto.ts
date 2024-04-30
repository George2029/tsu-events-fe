import { IsOptional, IsString, IsNotEmpty, IsEnum, IsDate } from 'class-validator';
import { EventType } from './../../events/enums/eventType.enum';
import { Type } from 'class-transformer';

export class CreateRequestDto {
	@IsNotEmpty()
	@IsString()
	title: string;

	@IsEnum(EventType)
	type: EventType;

	@IsOptional()
	@IsNotEmpty()
	@IsString()
	location: string;

	@IsOptional()
	@IsNotEmpty()
	@IsString()
	description?: string | null;

	@Type(() => Date)
	@IsDate()
	startTime: Date;

	@Type(() => Date)
	@IsDate()
	endTime: Date;

	constructor(
		title: string,
		type: EventType,
		startTime: Date,
		endTime: Date,
		location: string,
		description?: string | null,
	) {
		this.title = title;
		this.type = type;
		this.startTime = startTime;
		this.endTime = endTime;
		this.location = location;
		this.description = description;
	}
}
