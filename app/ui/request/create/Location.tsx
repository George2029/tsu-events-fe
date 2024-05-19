export default function Location() {
	return (
		<label htmlFor="location" className="custom-label">
			<span>Location</span>
			<input
				type="text"
				name="location"
				id="location"
				placeholder="TSU, 12th building"
				maxLength={50}
				required
			/>
		</label>
	)
}
