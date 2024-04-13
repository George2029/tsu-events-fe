export class ContestEventConfig {
	id: number;
	title: string;
	rules: string;
	prize: string;
	eventId: number;
	createdAt: Date;
	updatedAt: Date;
	description?: string;

	constructor(
		id: number,
		title: string,
		rules: string,
		prize: string,
		eventId: number,
		createdAt: Date,
		updatedAt: Date,
		description?: string
	) {
		this.id = id;
		this.title = title;
		this.rules = rules;
		this.prize = prize;
		this.eventId = eventId;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.description = description;
	}
}
