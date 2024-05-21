export default function Visits({ props }: { props: { existingValue: number } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="visits" className="custom-label">
			<span>
				Visits
			</span>
			<input
				type="number"
				name="visits"
				id="visits"
				placeholder={String(existingValue)}
			/>
		</label>
	)
}
