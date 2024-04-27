import { EventStatus } from '@/app/classes/events/enums/eventStatus.enum';

export default function Status({ props }: { props: { existingValue: EventStatus } }) {
	let { existingValue } = props;
	return (
		<fieldset>
			<legend className="text-sm font-semibold leading-8">Status: {existingValue}</legend>
			<input
				id={"NOTPASSED"}
				value={"NOTPASSED"}
				name="status"
				type="radio"
				className={`hidden peer/NOTPASSED`}
			/>
			<label htmlFor={"NOTPASSED"} className={`inline-block peer-checked/NOTPASSED:text-selected text-sm leading-8`}>
				NOTPASSED
			</label>
			<input
				id={"PASSED"}
				value={"PASSED"}
				name="status"
				type="radio"
				className={`hidden peer/PASSED`}
			/>
			<label htmlFor={"PASSED"} className={`ml-2 inline-block peer-checked/PASSED:text-selected text-sm leading-8`}>
				PASSED
			</label>
			<input
				id={"CANCELED"}
				value={"CANCELED"}
				name="status"
				type="radio"
				className={`hidden peer/CANCELED`}
			/>
			<label htmlFor={"CANCELED"} className={`ml-2 inline-block peer-checked/CANCELED:text-selected text-sm leading-8`}>
				CANCELED
			</label>
		</fieldset>
	)
}
