import { Audio } from './../../enums/audio.enum';
import { Subtitles } from './../../enums/subtitles.enum';

import { IsString, IsOptional, IsUrl, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateMovieEventConfigDto {

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	description?: string;

	@IsString()
	@IsNotEmpty()
	duration: string;

	@IsUrl()
	url: string;

	@IsEnum(Audio)
	audio: Audio = Audio.NATIVE;

	@IsEnum(Subtitles)
	subtitles: Subtitles = Subtitles.RUSSIAN;

	constructor(
		title: string,
		url: string,
		duration: string,
		audio: Audio,
		subtitles: Subtitles,
		description?: string
	) {
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.url = url
		this.audio = audio;
		this.subtitles = subtitles;

	}
}
