import BookStatus from '@/app/ui/event/BookStatus';
import book from '@/app/actions/events/event/book';
import updateBook from '@/app/actions/events/event/updateBook';
import getParticipant from '@/app/actions/events/event/getParticipant';

import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';

import { NotNotifiedMicro, MinusUserMicro, NotifiedMicro, CheckCircleMicro, PlusUserMicro } from '@/app/ui/icons/microIcons';
import { ShieldCheckFilled } from '@/app/ui/icons/fillIcons';

export default async function Book({ props }: { props: { eventId: number } }) {
	let { eventId } = props;


	let participant = await getParticipant(eventId);
	console.log(`participant: `, participant);

	let { id } = participant;

	let action: (formData: FormData) => Promise<void>;
	let faceTitle: string;
	let faceIcon: any;
	let notificationIcon: any;
	let actionTitle: string;
	let actionIcon: any;
	let actionTitle2: string;
	let actionIcon2: any;

	let statusInputField: ParticipantStatus | null = null;
	let statusInputField2: ParticipantStatus | null = null;

	let notifiedInputField: boolean | null = null;
	let notifiedInputField2: boolean | null = null;

	if (participant?.status === ParticipantStatus.ISPRESENT) return (
		<div className="flex gap-2 items-center text-green-500">
			{ShieldCheckFilled}
			<div>Visited!</div>
		</div>)

	let going = participant?.status === ParticipantStatus.ISGOING;
	let notified = participant?.notified;
	let hascanceled = participant?.status === ParticipantStatus.HASCANCELED;

	if (going) {
		notificationIcon = notified ? NotifiedMicro : NotNotifiedMicro;
	}

	if (!going) {
		statusInputField = hascanceled ? ParticipantStatus.ISGOING : null;
		statusInputField2 = hascanceled ? ParticipantStatus.ISGOING : null;
		notifiedInputField = true;

		action = hascanceled ? updateBook : book;
		faceTitle = 'Book';
		faceIcon = PlusUserMicro;
		actionTitle = `Notify`;
		actionIcon = NotifiedMicro;
		actionTitle2 = `Don't notify`;
		actionIcon2 = NotNotifiedMicro;
	} else if (!notified) {
		statusInputField = ParticipantStatus.HASCANCELED;
		action = updateBook;
		faceTitle = "Booked!";
		faceIcon = CheckCircleMicro;
		actionTitle = `Cancel`;
		actionIcon = MinusUserMicro;
		actionTitle2 = `Notify me`;
		actionIcon2 = NotifiedMicro;
		notifiedInputField2 = true;
	} else {
		statusInputField = ParticipantStatus.HASCANCELED;
		action = updateBook;
		faceTitle = "Booked!";
		faceIcon = CheckCircleMicro;
		actionTitle = `Cancel`;
		actionIcon = MinusUserMicro;
		actionTitle2 = `Don't notify`;
		actionIcon2 = NotNotifiedMicro;
		notifiedInputField2 = false;
	}
	return <BookStatus props={{ eventId, id, notifiedInputField, notifiedInputField2, statusInputField, statusInputField2, action, faceTitle, faceIcon, notificationIcon, actionTitle, actionIcon, actionTitle2, actionIcon2 }} />
}
