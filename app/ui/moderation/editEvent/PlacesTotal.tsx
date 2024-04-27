export default function PlacesTotal({ props }: { props: { existingValue: number } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="placesTotal" className="block text-sm leading-6">
			<span className="block font-semibold">Places Total</span>
			<input
				type="number"
				name="placesTotal"
				id="placesTotal"
				min="4"
				max="500"
				className="mt-1 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md dark:bg-gray-700"
				placeholder={existingValue.toString()}
			/>
		</label>
	)
}
