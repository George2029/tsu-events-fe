import { IsOptional, IsEnum, IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { EventType } from './../../events/enums/eventType.enum';

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
	@Type(() => Date)
	@IsDate()
	startTime?: Date;

	@IsOptional()
	@Type(() => Date)
	@IsDate()
	endTime?: Date;

	constructor(
		description?: string | null,
		title?: string,
		type?: EventType,
		startTime?: Date,
		endTime?: Date,
		location?: string,
	) {
		this.title = title;
		this.type = type;
		this.startTime = startTime;
		this.endTime = endTime;
		this.location = location;
		this.description = description;
	}
}
