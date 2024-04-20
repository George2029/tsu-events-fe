export class CustomEventConfig {
	id: number;
	title: string;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
	description?: string;

	constructor(
		id: number,
		title: string,
		eventId: number,
		createdAt: Date,
		updatedAt: Date,
		description?: string
	) {
		this.id = id;
		this.title = title;
		this.eventId = eventId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.description = description;
	}
}
