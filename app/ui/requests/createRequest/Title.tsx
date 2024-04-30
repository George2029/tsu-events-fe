export default function Title() {
	return (
		<label htmlFor="title" className="block text-sm leading-6">
			<span className="block after:content-['*'] font-semibold after:ml-0.5 after:text-red-500">
				Title
			</span>
			<input
				type="text"
				name="title"
				id="title"
				autoComplete="title"
				className="block mt-1 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1 dark:bg-gray-700"
				placeholder="Spring Contest #12"
				maxLength={50}
				required
			/>
		</label>
	)
}
