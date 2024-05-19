
export default function Type({ props }: { props: { onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void } }) {
	const { onTypeChange } = props;
	return (
		<fieldset>
			<label htmlFor="type-select" className="block text-sm font-semibold required">Type:</label>
			<select required onChange={onTypeChange} name="type" id="type-select" className="mt-1 text-sm font-semibold rounded-md border border-slate-300 placeholder-slate-400 focus:ring-1 focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:border-focused bg-white dark:bg-gray-700">
				<option value="">--Choose an option--</option>
				<option value="MOVIE_EVENT">Movie</option>
				<option value="BOARD_GAMES_EVENT">Board games</option>
				<option value="CONTEST_EVENT">Contest</option>
				<option value="CUSTOM_EVENT">Custom</option>
			</select>
		</fieldset>
	)
}

