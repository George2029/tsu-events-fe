export default function Title() {
	return (
		<div>
			<label htmlFor="title" className="text-sm font-semibold leading-6">
				Title
			</label>
			<div>
				<div>
					<input
						type="text"
						name="title"
						id="title"
						autoComplete="title"
						className="rounded-lg dark:bg-gray-700"
						placeholder="Some Event"
						maxLength={50}
						required
					/>
				</div>
			</div>
		</div>
	)
}
