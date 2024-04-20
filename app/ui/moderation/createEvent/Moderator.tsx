
export default function Moderator() {
	return (
		<div>
			<label htmlFor="moderator" className="text-sm font-semibold leading-6">
				Moderator
			</label>
			<div>
				<div>
					<input
						type="text"
						name="moderator"
						id="moderator"
						className="rounded-lg dark:bg-gray-700"
						placeholder="George"
						required
					/>
				</div>
			</div>
		</div>
	)
}
