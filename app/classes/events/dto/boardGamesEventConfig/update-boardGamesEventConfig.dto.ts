import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateBoardGamesEventConfigDto {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	title?: string;

	@Type(() => Number)
	@IsInt()
	eventId: number;

	@IsOptional()
	@IsInt()
	maxPlayers?: number;

	@IsOptional()
	@IsNotEmpty()
	@IsString()
	description?: string;

	constructor(
		eventId: number,
		title?: string,
		maxPlayers?: number,
		description?: string
	) {
		this.title = title;
		this.eventId = eventId;
		this.maxPlayers = maxPlayers;
		this.description = description;
	}
}
