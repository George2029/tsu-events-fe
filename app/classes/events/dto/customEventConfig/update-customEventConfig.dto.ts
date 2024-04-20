import { IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCustomEventConfigDto {
	@Type(() => Number)
	@IsInt()
	eventId: number;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	title?: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	description?: string;

	constructor(
		eventId: number,
		title?: string,
		description?: string,
	) {
		this.eventId = eventId;
		this.title = title;
		this.description = description;
	}
}
