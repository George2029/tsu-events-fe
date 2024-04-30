import { MovieIcon, BoardGamesIcon, ContestIcon, CustomIcon } from '@/app/ui/eventTypeIcons';
import { EventType } from '@/app/classes/events/enums/eventType.enum';

export default function Type({ props }: { props: { existingValue: EventType } }) {
	const { existingValue } = props;
	return (
		<fieldset className="">
			<legend className="text-sm font-semibold">Type: {existingValue}</legend>
			<input
				id={"MOVIE_EVENT"}
				value={"MOVIE_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/MOVIE_EVENT`}
			/>
			<label htmlFor={"MOVIE_EVENT"} className={`ml-2 inline-block peer-checked/MOVIE_EVENT:text-specialIcons dark:peer-checked/MOVIE_EVENT:text-darkspecialIcons text-sm leading-8`}>
				{MovieIcon}
			</label>
			<input
				id={"BOARD_GAMES_EVENT"}
				value={"BOARD_GAMES_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/BOARD_GAMES_EVENT`}
			/>
			<label htmlFor={"BOARD_GAMES_EVENT"} className={`ml-2 inline-block peer-checked/BOARD_GAMES_EVENT:text-specialIcons dark:peer-checked/BOARD_GAMES_EVENT:text-darkspecialIcons text-sm leading-8`}>
				{BoardGamesIcon}
			</label>
			<input
				id={"CONTEST_EVENT"}
				value={"CONTEST_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/CONTEST_EVENT`}
			/>
			<label htmlFor={"CUSTOM_EVENT"} className={`ml-2 inline-block peer-checked/CUSTOM_EVENT:text-specialIcons dark:peer-checked/CUSTOM_EVENT:text-darkspecialIcons text-sm leading-8`}>
				{ContestIcon}
			</label>
			<input
				id={"CUSTOM_EVENT"}
				value={"CUSTOM_EVENT"}
				name="type"
				type="radio"
				className={`hidden peer/CUSTOM_EVENT`}
			/>
			<label htmlFor={"CUSTOM_EVENT"} className={`ml-2 inline-block peer-checked/CUSTOM_EVENT:text-selected text-sm leading-8`}>
				{CustomIcon}
			</label>
			<div>In case of the change do not forget to remove configs that were bound to the previous type</div>
		</fieldset>
	)
}

