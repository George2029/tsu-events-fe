'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom';

import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';

function Submit({ props }: { props: { title: string, icon: any } }) {
	let { title, icon } = props;
	const status = useFormStatus();
	return (
		<button disabled={status.pending} className="w-full flex justify-between gap-2 p-2 rounded-lg cursor-pointer dark:hover:ring-1 hover:text-active dark:hover:text-darktext dark:hover:ring-darkactive">
			{
				status.pending ? 'Wait...' :
					<>
						<div>{title}</div>
						<div>{icon}</div>
					</>
			}

		</button>
	)
}


export default function BookStatus({ props }: {
	props: {
		eventId: number,
		id: number,
		notifiedInputField: boolean | null,
		notifiedInputField2: boolean | null,
		statusInputField: ParticipantStatus | null,
		statusInputField2: ParticipantStatus | null,
		action: (formData: FormData) => Promise<void>,
		faceTitle: string,
		faceIcon: any,
		notificationIcon: any,
		actionTitle: string,
		actionIcon: any,
		actionTitle2: string,
		actionIcon2: any
	}
}) {

	let {
		eventId,
		id,
		notifiedInputField,
		notifiedInputField2,
		statusInputField,
		statusInputField2,
		action,
		faceTitle,
		faceIcon,
		notificationIcon,
		actionTitle,
		actionIcon,
		actionTitle2,
		actionIcon2,
	} = props;

	let [open, setOpen] = useState(false);

	return (
		<div className="relative">

			<div onClick={() => setOpen(e => !e)} className="md:active:scale-90 ring-1 ring-border dark:ring-darkborder active:scale-50 duration-300 select-none text-sm bg-button dark:bg-darkgenreBarBG flex hover:ring-active dark:hover:ring-darkactive gap-2 cursor-pointer p-2 rounded-lg"

			>
				<div>{faceTitle}</div>
				<div className="text-green-500">{faceIcon}</div>
				{notificationIcon && <div>{notificationIcon}</div>}
			</div>

			<div className={`${!open && 'hidden'} ring-1 ring-border dark:ring-darkborder bg-button dark:bg-darkgenreBarBG text-nowrap absolute right-0 top-10 rounded-lg`}>
				<form action={action}>
					<input name="eventId" type="hidden" value={eventId} />
					<input name="id" type="hidden" value={id} />
					{notifiedInputField !== null && <input name="notified" type="hidden" value={Number(notifiedInputField)} />}
					{statusInputField !== null && <input name="status" type="hidden" value={statusInputField} />}
					<Submit props={{ title: actionTitle, icon: actionIcon }} />
				</form>
				<form action={action}>
					<input name="id" type="hidden" value={id} />
					<input name="eventId" type="hidden" value={eventId} />
					{notifiedInputField2 !== null && <input name="notified" type="hidden" value={Number(notifiedInputField2)} />}
					{statusInputField2 !== null && <input name="status" type="hidden" value={statusInputField2} />}
					<Submit props={{ title: actionTitle2, icon: actionIcon2 }} />
				</form>
			</div>
		</div>
	)
}

