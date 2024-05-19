export default function Title({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="title" className="custom-label">
			<span>
				Title
			</span>
			<input
				type="text"
				name="title"
				id="title"
				autoComplete="title"
				placeholder={existingValue}
				maxLength={50}
			/>
		</label>
	)
}
