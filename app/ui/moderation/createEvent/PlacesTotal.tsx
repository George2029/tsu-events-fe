
export default function PlacesTotal() {
	return (
		<div>
			<label htmlFor="placesTotal" className="text-sm font-semibold leading-6">
				Places Total
			</label>
			<div>
				<div>
					<input
						type="number"
						name="placesTotal"
						id="placesTotal"
						min="4"
						max="500"
						className="rounded-lg dark:bg-gray-700"
						placeholder="10"
						required
					/>
				</div>
			</div>
		</div>
	)
}
