import { IsBoolean, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateVoteDto {
	@Type(() => Number)
	@IsInt()
	requestId: number;

	@Type(() => Boolean)
	@IsBoolean()
	value: boolean;

	constructor(
		requestId: number,
		value: boolean
	) {
		this.requestId = requestId;
		this.value = value;
	}
}
