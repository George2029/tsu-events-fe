import { Audio } from '@/app/ui/events/enums/audio.enum';
import { Subtitles } from '@/app/ui/events/enums/subtitles.enum';

export class MovieEventConfig {
	id: number;
	title: string;
	duration: string;
	audio: Audio;
	subtitles: Subtitles;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
	description?: string;

	constructor(
		id: number,
		title: string,
		duration: string,
		audio: Audio,
		subtitles: Subtitles,
		eventId: number,
		createdAt: Date,
		updatedAt: Date,
		description?: string
	) {
		this.id = id;
		this.title = title;
		this.duration = duration;
		this.audio = audio;
		this.subtitles = subtitles;
		this.eventId = eventId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.description = description;
	}
}
