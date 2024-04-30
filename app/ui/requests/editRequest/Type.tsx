//import { MovieIcon, BoardGamesIcon, ContestIcon, CustomIcon } from '@/app/ui/eventTypeIcons';
import { FillMovie, FillPuzzle, FillTrophy, FillBolt } from '@/app/ui/fillIcons';

export default function Type({ props }: { props: { existingValue: string } }) {
	const { existingValue } = props;
	return (
		<fieldset>
			<label htmlFor="type-select" className="block text-sm font-semibold ">Choose a type:</label>
			<select name="type" id="type-select" className="mt-1 text-sm font-semibold rounded-md border border-inputBorder focus:ring-1 focus:ring-focused dark:text-darktext focus:border-focused bg-inputBG dark:bg-darkinputBG">Type: {existingValue}
				<option value="MOVIE_EVENT" selected={existingValue === "MOVIE_EVENT"}>Movie</option>
				<option value="BOARD_GAMES_EVENT" selected={existingValue === "BOARD_GAMES_EVENT"}>Board games</option>
				<option value="CONTEST_EVENT" selected={existingValue === "CONTEST_EVENT"}>Contest</option>
				<option value="CUSTOM_EVENT" selected={existingValue === "CUSTOM_EVENT"}>Custom</option>
			</select>
		</fieldset>
	)
}

