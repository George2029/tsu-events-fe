export default function Wins({ props }: { props: { existingValue: number } }) {
	let { existingValue } = props;
	return (
		<label htmlFor="wins" className="custom-label">
			<span>
				Wins
			</span>
			<input
				type="number"
				name="wins"
				id="wins"
				placeholder={String(existingValue)}
			/>
		</label>
	)
}
