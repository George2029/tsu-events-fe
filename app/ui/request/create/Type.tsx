//import { MovieIcon, BoardGamesIcon, ContestIcon, CustomIcon } from '@/app/ui/eventTypeIcons';
import { FillMovie, FillPuzzle, FillTrophy, FillBolt } from '@/app/ui/icons/fillIcons';

export default function Type() {
	return (
		<fieldset className="">
			<legend className="text-sm font-semibold leading-8 required">Type</legend>
			<input
				id={"MOVIE_EVENT"}
				value={"MOVIE_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/MOVIE_EVENT`}
				required
			/>
			<label htmlFor={"MOVIE_EVENT"} className={`ml-2 inline-block peer-checked/MOVIE_EVENT:text-specialIcons dark:peer-checked/MOVIE_EVENT:text-darkspecialIcons text-sm leading-8`}>
				{FillMovie}
			</label>
			<input
				id={"BOARD_GAMES_EVENT"}
				value={"BOARD_GAMES_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/BOARD_GAMES_EVENT`}
				required
			/>
			<label htmlFor={"BOARD_GAMES_EVENT"} className={`ml-2 inline-block peer-checked/BOARD_GAMES_EVENT:text-specialIcons dark:peer-checked/BOARD_GAMES_EVENT:text-darkspecialIcons text-sm leading-8`}>
				{FillPuzzle}
			</label>
			<input
				id={"CONTEST_EVENT"}
				value={"CONTEST_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/CONTEST_EVENT`}
				required
			/>
			<label htmlFor={"CONTEST_EVENT"} className={`ml-2 inline-block peer-checked/CONTEST_EVENT:text-specialIcons dark:peer-checked/CONTEST_EVENT:text-darkspecialIcons text-sm leading-8`}>
				{FillTrophy}
			</label>
			<input
				id={"CUSTOM_EVENT"}
				value={"CUSTOM_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/CUSTOM_EVENT`}
				required
			/>
			<label htmlFor={"CUSTOM_EVENT"} className={`ml-2 inline-block peer-checked/CUSTOM_EVENT:text-specialIcons dark:peer-checked/CUSTOM_EVENT:text-darkspecialIcons text-sm leading-8`}>
				{FillBolt}
			</label>
			<div className="hidden peer-checked/MOVIE_EVENT:block">There will be movies</div>
			<div className="hidden peer-checked/BOARD_GAMES_EVENT:block">There will be board games</div>
			<div className="hidden peer-checked/CONTEST_EVENT:block">There will be some kind of contest</div>
			<div className="hidden peer-checked/CUSTOM_EVENT:block">Custom. If no other option is suitable.</div>
		</fieldset>
	)
}

