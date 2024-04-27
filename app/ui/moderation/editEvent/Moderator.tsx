export default function Moderator({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="moderator" className="block text-sm leading-6">
			<span className="block font-semibold">Moderator</span>
			<input
				type="text"
				name="moderator"
				id="moderator"
				className="mt-1 placeholder-slate-400 block border border-slate-300 focus:ring-1 focus:border-sky-500 focus:ring-sky-500 focus:outline-none rounded-md dark:bg-gray-700"
				placeholder={existingValue}
			/>
		</label>
	)
}
