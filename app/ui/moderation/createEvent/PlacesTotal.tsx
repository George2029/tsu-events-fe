
export default function PlacesTotal() {
	return (
		<label htmlFor="placesTotal" className="custom-label">
			<span>Places Total</span>
			<input
				type="number"
				name="placesTotal"
				id="placesTotal"
				min="4"
				max="500"
				placeholder="10"
				required
			/>
		</label>
	)
}
