export default function Type({ props }: { props: { onTypeChange: (e: React.FormEvent<HTMLInputElement>) => void } }) {
	const { onTypeChange } = props;
	return (
		<div>
			<legend className="text-sm font-semibold leading-8">Type</legend>
			<div className="mt-2 space-y-2">
				<div className="flex items-center gap-x-3">
					<input
						value="MOVIE_EVENT"
						onChange={onTypeChange}
						id="MOVIE_EVENT"
						name="type"
						type="radio"
						className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						required
					/>
					<label htmlFor="MOVIE_EVENT" className="text-sm leading-8">
						Movie Event
					</label>
				</div>
				<div className="flex items-center gap-x-3">
					<input
						value="BOARD_GAMES_EVENT"
						onChange={onTypeChange}
						id="BOARD_GAMES_EVENT"
						name="type"
						type="radio"
						className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label htmlFor="BOARD_GAMES_EVENT" className="text-sm leading-8">
						Board Games Event
					</label>
				</div>
				<div className="flex items-center gap-x-3">
					<input
						value="CONTEST_EVENT"
						onChange={onTypeChange}
						id="CONTEST_EVENT"
						name="type"
						type="radio"
						className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label htmlFor="CONTEST_EVENT" className="text-sm leading-8">
						Contest Event
					</label>
				</div>
				<div className="flex items-center gap-x-3">
					<input
						value="CUSTOM_EVENT"
						onChange={onTypeChange}
						id="CUSTOM_EVENT"
						name="type"
						type="radio"
						className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label htmlFor="CUSTOM_EVENT" className="text-sm leading-8">
						Custom Event
					</label>
				</div>
			</div>
		</div>
	)
}
