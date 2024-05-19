export default function Type({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	let display = (str: string): string => {
		str = str.toLowerCase().split('_').join(' ');
		return str[0].toUpperCase() + str.substring(1);
	}
	return (
		<fieldset>
			<label htmlFor="type-select" className="block text-sm font-semibold ">Edit type:</label>
			<select name="type" id="type-select" className="mt-1 text-sm font-semibold rounded-md border border-slate-300 placeholder-slate-400 focus:ring-1 focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:border-focused bg-white dark:bg-gray-700">
				<option value="">{display(existingValue)}</option>
				<option hidden={existingValue === "MOVIE_EVENT"} value="MOVIE_EVENT">Movie event</option>
				<option hidden={existingValue === "BOARD_GAMES_EVENT"} value="BOARD_GAMES_EVENT">Board games event</option>
				<option hidden={existingValue === "CONTEST_EVENT"} value="CONTEST_EVENT">Contest event</option>
				<option hidden={existingValue === "CUSTOM_EVENT"} value="CUSTOM_EVENT">Custom event</option>
			</select>
		</fieldset>
	)
}

