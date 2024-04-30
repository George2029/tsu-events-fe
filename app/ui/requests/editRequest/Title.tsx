export default function Title({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="title" className="block text-sm leading-6">
			<span className="block font-semibold">
				Title
			</span>
			<input
				type="text"
				name="title"
				id="title"
				autoComplete="title"
				className="block mt-1 text-sm rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG"
				placeholder={existingValue}
				maxLength={50}
			/>
		</label>
	)
}
