export class BoardGamesEventConfig {
	id: number;
	title: string;
	maxPlayers: number;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
	description?: string;

	constructor(
		id: number,
		title: string,
		maxPlayers: number,
		eventId: number,
		createdAt: Date,
		updatedAt: Date,
		description?: string
	) {
		this.id = id;
		this.title = title;
		this.maxPlayers = maxPlayers;
		this.eventId = eventId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.description = description;
	}
}
