export type EventOrRequestPreviewWithOwnerData = {
	id: number,
	title: string,
	location: string,
	type: string,
	startTime: string,
	createdAt: string,
	userId: number,
	user: {
		hue: number,
		firstName: string
	}
}
