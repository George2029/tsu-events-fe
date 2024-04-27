import { ParticipantStatus } from '@/app/classes/participants/enums/participantStatus.enum';

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


	return (
		<details className="ring-1 ring-border dark:ring-darkborder select-none bg-button dark:bg-darkgenreBarBG text-sm relative self-center rounded-lg">

			<summary className="flex hover:ring-1 hover:ring-active dark:hover:ring-darkactive gap-2 cursor-pointer p-2 rounded-lg"

			>
				<div>{faceTitle}</div>
				<div className="text-green-500">{faceIcon}</div>
				{notificationIcon && <div>{notificationIcon}</div>}
			</summary>

			<div className={`ring-1 ring-border dark:ring-darkborder bg-button dark:bg-darkgenreBarBG text-nowrap absolute right-0 top-10 rounded-lg`}>
				<form action={action}>
					<input name="eventId" type="hidden" value={eventId} />
					<input name="id" type="hidden" value={id} />
					{notifiedInputField !== null && <input name="notified" type="hidden" value={Number(notifiedInputField)} />}
					{statusInputField !== null && <input name="status" type="hidden" value={statusInputField} />}

					<button className="w-full flex justify-between gap-2 p-2 rounded-lg cursor-pointer dark:hover:ring-1 hover:text-active dark:hover:text-darktext dark:hover:ring-darkactive">
						<div>{actionTitle}</div>
						<div>{actionIcon}</div>
					</button>
				</form>
				<form action={action}>
					<input name="id" type="hidden" value={id} />
					<input name="eventId" type="hidden" value={eventId} />
					{notifiedInputField2 !== null && <input name="notified" type="hidden" value={Number(notifiedInputField2)} />}
					{statusInputField2 !== null && <input name="status" type="hidden" value={statusInputField2} />}
					<button className="w-full flex justify-between gap-2 p-2 rounded-lg cursor-pointer dark:hover:ring-1 hover:text-active dark:hover:text-darktext dark:hover:ring-darkactive">
						<div>{actionTitle2}</div>
						<div>{actionIcon2}</div>
					</button>
				</form>
			</div>
		</details>
	)
}

