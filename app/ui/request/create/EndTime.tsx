export default function EndTime({ props }: { props: { normalizedTimeString: string } }) {
	let { normalizedTimeString } = props;
	return (
		<label htmlFor="startTime" className="custom-label">
			<span>End time:</span>
			<input
				type="datetime-local"
				id="endTime"
				name="endTime"
				defaultValue={normalizedTimeString}
				min={normalizedTimeString}
				required
			/>
		</label>
	)
}
