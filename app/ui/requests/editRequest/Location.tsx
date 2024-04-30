export default function Location({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="location" className="block text-sm leading-6">
			<span className="font-semibold">Location</span>
			<input
				type="text"
				name="location"
				id="location"
				className="block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
				placeholder={existingValue}
				maxLength={50}
			/>
		</label>
	)
}
