export default function EndTime({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="endTime" className="custom-label">
			<span>End time:</span>
			<input
				type="datetime-local"
				id="endTime"
				name="endTime"
				placeholder={existingValue}
				min={existingValue}
			/>
		</label>
	)
}
