import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCustomEventConfigDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	description?: string;

	constructor(
		title: string,
		description?: string,
	) {
		this.title = title;
		this.description = description;
	}
}
