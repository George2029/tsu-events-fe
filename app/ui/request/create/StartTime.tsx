
export default function StartTime({ props }: { props: { normalizedTimeString: string } }) {
	let { normalizedTimeString } = props;
	return (
		<label htmlFor="startTime" className="custom-label">
			<span>Start time:</span>
			<input
				type="datetime-local"
				id="startTime"
				name="startTime"
				defaultValue={normalizedTimeString}
				min={normalizedTimeString}
				required
			/>
		</label>
	)
}
