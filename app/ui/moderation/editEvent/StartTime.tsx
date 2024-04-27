export default function StartTime({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="startTime" className="block max-w-72 leading-6 text-sm dark:text-white">
			<span className="block font-semibold">Start time:</span>
			<input
				type="datetime-local"
				id="startTime"
				name="startTime"
				className="bg-gray-50 border leading-none border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-blue-500 block dark:bg-gray-700 placeholder-slate-400"
				defaultValue={existingValue}
			/>
		</label>
	)
}
