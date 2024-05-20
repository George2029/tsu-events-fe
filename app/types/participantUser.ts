import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';

export type ParticipantUser = {
	id: number,
	userId: number,
	eventId: number,
	notified: boolean,
	status: ParticipantStatus,
	createdAt: string,
	updateAt: string
	user: {
		hue: number,
		username: string,
		firstName: string
	}
}
