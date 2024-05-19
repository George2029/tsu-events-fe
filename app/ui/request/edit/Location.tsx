export default function Location({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="location" className="custom-label">
			<span>Location</span>
			<input
				type="text"
				name="location"
				id="location"
				placeholder={existingValue}
				maxLength={50}
			/>
		</label>
	)
}
