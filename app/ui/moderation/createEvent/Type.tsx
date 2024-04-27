import { MovieIcon, BoardGamesIcon, ContestIcon, CustomIcon } from '@/app/ui/eventTypeIcons';

export default function Type({ props }: { props: { onTypeChange: (e: React.FormEvent<HTMLInputElement>) => void } }) {
	const { onTypeChange } = props;
	return (
		<fieldset className="">
			<legend className="text-sm font-semibold leading-8 after:content-['*'] after:ml-0.5 after:text-red-500">Type</legend>
			<input
				id={"MOVIE_EVENT"}
				value={"MOVIE_EVENT"}
				onChange={onTypeChange}
				name="type"
				type="radio"
				className={`hidden peer/MOVIE_EVENT`}
				required
			/>
			<label htmlFor={"MOVIE_EVENT"} className={`inline-block peer-checked/MOVIE_EVENT:text-selected text-sm leading-8`}>
				{MovieIcon}
			</label>
			<input
				id={"BOARD_GAMES_EVENT"}
				value={"BOARD_GAMES_EVENT"}
				onChange={onTypeChange}
				name="type"
				type="radio"
				className={`hidden peer/BOARD_GAMES_EVENT`}
				required
			/>
			<label htmlFor={"BOARD_GAMES_EVENT"} className={`ml-2 inline-block peer-checked/BOARD_GAMES_EVENT:text-selected text-sm leading-8`}>
				{BoardGamesIcon}
			</label>
			<input
				id={"CONTEST_EVENT"}
				value={"CONTEST_EVENT"}
				onChange={onTypeChange}
				name="type"
				type="radio"
				className={`hidden peer/CONTEST_EVENT`}
				required
			/>
			<label htmlFor={"CONTEST_EVENT"} className={`ml-2 inline-block peer-checked/CONTEST_EVENT:text-selected text-sm leading-8`}>
				{ContestIcon}
			</label>
			<input
				id={"CUSTOM_EVENT"}
				value={"CUSTOM_EVENT"}
				onChange={onTypeChange}
				name="type"
				type="radio"
				className={`hidden peer/CUSTOM_EVENT`}
				required
			/>
			<label htmlFor={"CUSTOM_EVENT"} className={`ml-2 inline-block peer-checked/CUSTOM_EVENT:text-selected text-sm leading-8`}>
				{CustomIcon}
			</label>
			<div className="hidden peer-checked/MOVIE_EVENT:block">There will be movies</div>
			<div className="hidden peer-checked/BOARD_GAMES_EVENT:block">There will be board games</div>
			<div className="hidden peer-checked/CONTEST_EVENT:block">There will be some kind of contest</div>
			<div className="hidden peer-checked/CUSTOM_EVENT:block">Custom. If no other option is suitable.</div>
		</fieldset>
	)
}

