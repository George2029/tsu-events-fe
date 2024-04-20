import { Audio } from './../../enums/audio.enum';
import { Subtitles } from './../../enums/subtitles.enum';
import { Type } from 'class-transformer';

import { IsString, IsOptional, IsUrl, IsEnum, IsNotEmpty, IsInt } from 'class-validator';

export class UpdateMovieEventConfigDto {
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
	description?: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	duration?: string;

	@IsOptional()
	@IsUrl()
	url?: string;

	@IsOptional()
	@IsEnum(Audio)
	audio?: Audio = Audio.NATIVE;

	@IsOptional()
	@IsEnum(Subtitles)
	subtitles?: Subtitles = Subtitles.RUSSIAN;

	constructor(
		eventId: number,
		title?: string,
		url?: string,
		duration?: string,
		audio?: Audio,
		subtitles?: Subtitles,
		description?: string
	) {
		this.eventId = eventId;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.url = url
		this.audio = audio;
		this.subtitles = subtitles;

	}
}
