export default function StartTime({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="startTime" className="block max-w-72 leading-6 text-sm dark:text-white">
			<span className="block font-semibold">Start time:</span>
			<input
				type="datetime-local"
				id="startTime"
				name="startTime"
				className="block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
				defaultValue={existingValue}
				min={existingValue}
			/>
		</label>
	)
}
