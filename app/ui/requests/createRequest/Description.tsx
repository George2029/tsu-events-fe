
export default function Description() {
	return (
		<label htmlFor="description" className="block text-sm leading-6">
			<span className="block font-semibold">
				Description
			</span>
			<textarea
				id="description"
				name="description"
				rows={3}
				className="w-full max-w-xl block mt-1 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1 dark:bg-gray-700"
				placeholder="It will be great, trust"
				maxLength={1000}
			/>
			<p className="mt-2 text-sm leading-6 text-gray-500">Write a few sentences about event</p>
		</label>
	)
}
