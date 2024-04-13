export type CustomEventConfig = {
	id: number,
	title: string,
	eventId: number,
	createdAt: string,
	updatedAt: string,
	description?: string
}

export type MovieEventConfig = {
	id: number,
	title: string,
	audio: string,
	subtitles: string,
	eventId: number,
	createdAt: string,
	updatedAt: string,
	description?: string
}

export type BoardGamesEventConfig = {
	id: number,
	title: string,
	maxPlayers: number,
	eventId: number,
	createdAt: string,
	updatedAt: string,
	description?: string
}

export type ContestEventConfig = {
	id: number,
	title: string,
	rules: string,
	prize: string,
	eventId: number,
	createdAt: Date,
	updatedAt: Date,
	description?: string
}

export type EventJSON = {
	id: string,
	type: string,
	title: string,
	location: string,
	moderator: string,
	placesTotal: number,
	status: string,
	startTime: string,
	endTime: string,
	rating: string,
	createdAt: string,
	updatedAt: string,
	description?: string,
}
