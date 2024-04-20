export default function Location() {
	return (
		<div>
			<label htmlFor="location" className="text-sm font-semibold leading-6">
				Location
			</label>
			<div>
				<div>
					<input
						type="text"
						name="location"
						id="location"
						className="rounded-lg dark:bg-gray-700"
						placeholder="TSU 12th building"
						required
					/>
				</div>
			</div>
		</div>
	)
}
