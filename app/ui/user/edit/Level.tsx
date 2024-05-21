export default function Level({ props }: { props: { existingValue: number } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="level" className="custom-label">
			<span>
				Level
			</span>
			<input
				type="number"
				name="level"
				id="level"
				placeholder={String(existingValue)}
			/>
		</label>
	)
}
