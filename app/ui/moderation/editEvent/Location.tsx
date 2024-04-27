export default function Location({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="location" className="block text-sm leading-6">
			<span className="font-semibold">Location</span>
			<input
				type="text"
				name="location"
				id="location"
				className="block mt-1 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1 dark:bg-gray-700"
				placeholder={existingValue}
				maxLength={50}
			/>
		</label>
	)
}
