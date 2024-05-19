export default function EndTime({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="endTime" className="block max-w-72 leading-6 text-sm dark:text-white">
			<span className="block font-semibold">End time:</span>
			<input
				type="datetime-local"
				id="endTime"
				name="endTime"
				className="bg-gray-50 border leading-none border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-blue-500 block dark:bg-gray-700 placeholder-slate-400"
				placeholder={existingValue}
			/>
		</label>
	)
}
