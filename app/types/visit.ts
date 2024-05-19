import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';

export type Visit = {
	id: number,
	status: ParticipantStatus,
	eventId: number,
	userId: number,
	createdAt: string,
	updateAt: string,
	event: {
		title: string,
		startTime: string
	}
}

