export default function EndOfRequestTime({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="endOfRequestTime" className="custom-label">
			<span>Voting ends at:</span>
			<input
				type="datetime-local"
				id="endOfRequestTime"
				name="endOfRequestTime"
				placeholder={existingValue}
				min={existingValue}
			/>
		</label>
	)
}
