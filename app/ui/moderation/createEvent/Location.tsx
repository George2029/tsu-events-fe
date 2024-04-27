export default function Location() {
	return (
		<label htmlFor="location" className="block text-sm leading-6">
			<span className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Location</span>
			<input
				type="text"
				name="location"
				id="location"
				className="block mt-1 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1 dark:bg-gray-700"
				placeholder="TSU, 12th building"
				maxLength={50}
				required
			/>
		</label>
	)
}
