
export default function Moderator() {
	return (
		<label htmlFor="moderator" className="block text-sm leading-6">
			<span className="block font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Moderator</span>
			<input
				type="text"
				name="moderator"
				id="moderator"
				className="mt-1 placeholder-slate-400 block border border-slate-300 focus:ring-1 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md dark:bg-gray-700"
				placeholder="George"
				required
			/>
		</label>
	)
}
