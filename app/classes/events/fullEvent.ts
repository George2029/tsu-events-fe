import { EventType } from '@/app/ui/events/enums/eventType.enum';
import { EventStatus } from '@/app/ui/events/enums/eventStatus.enum';
import { CustomEventConfig } from './customEventConfig';
import { MovieEventConfig } from './movieEventConfig';
import { BoardGamesEventConfig } from './boardGamesEventConfig';
import { ContestEventConfig } from './contestEventConfig';

export class FullEvent {
	id: number;
	type: EventType;
	title: string;
	location: string;
	moderator: string;
	placesTotal: number;
	status: EventStatus;
	startTime: Date;
	endTime: Date;
	rating: number;
	createdAt: Date;
	updatedAt: Date;
	customEventConfigs: CustomEventConfig[];
	movieEventConfigs: MovieEventConfig[];
	boardGamesEventConfigs: BoardGamesEventConfig[];
	contestEventConfigs: ContestEventConfig[];
	description?: string;

	constructor(
		id: number,
		type: EventType,
		title: string,
		location: string,
		moderator: string,
		placesTotal: number,
		status: EventStatus,
		startTime: Date,
		endTime: Date,
		rating: number,
		createdAt: Date,
		updatedAt: Date,
		customEventConfigs: CustomEventConfig[],
		movieEventConfigs: MovieEventConfig[],
		boardGamesEventConfigs: BoardGamesEventConfig[],
		contestEventConfigs: ContestEventConfig[],
		description?: string,
	) {
		this.id = id;
		this.type = type;
		this.title = title;
		this.location = location;
		this.moderator = moderator;
		this.placesTotal = placesTotal;
		this.status = status;
		this.startTime = startTime;
		this.endTime = endTime;
		this.rating = rating;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.customEventConfigs = customEventConfigs;
		this.movieEventConfigs = movieEventConfigs;
		this.boardGamesEventConfigs = boardGamesEventConfigs,
			this.contestEventConfigs = contestEventConfigs
		this.description = description;

	}
}

