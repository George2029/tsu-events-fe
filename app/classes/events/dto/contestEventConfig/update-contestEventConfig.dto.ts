import { IsString, IsOptional, IsNotEmpty, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateContestEventConfigDto {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	title?: string;

	@Type(() => Number)
	@IsInt()
	eventId: number;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	rules?: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	prize?: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	description?: string;

	constructor(
		eventId: number,
		title?: string,
		rules?: string,
		prize?: string,
		description?: string
	) {
		this.title = title;
		this.eventId = eventId;
		this.rules = rules;
		this.prize = prize;
		this.description = description;
	}
}
