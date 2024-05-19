export default function StartTime({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="startTime" className="custom-label">
			<span>Start time:</span>
			<input
				type="datetime-local"
				id="startTime"
				name="startTime"
				placeholder={existingValue}
				min={existingValue}
			/>
		</label>
	)
}
