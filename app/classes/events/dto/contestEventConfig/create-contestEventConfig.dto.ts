import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateContestEventConfigDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	rules: string;

	@IsString()
	@IsNotEmpty()
	prize: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	description?: string;

	constructor(
		title: string,
		rules: string,
		prize: string,
		description?: string
	) {
		this.title = title;
		this.rules = rules;
		this.prize = prize;
		this.description = description;
	}
}
