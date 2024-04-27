import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBoardGamesEventConfigDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsInt()
	maxPlayers: number;

	@IsOptional()
	@IsNotEmpty()
	@IsString()
	description?: string;

	constructor(
		title: string,
		maxPlayers: number,
		description?: string
	) {
		this.title = title;
		this.maxPlayers = maxPlayers;
		this.description = description;
	}
}
