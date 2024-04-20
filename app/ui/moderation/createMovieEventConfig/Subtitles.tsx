import MovieConfigRadioOption from './RadioOption';

let Subtitles = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<div>
			<legend className="text-sm font-semibold leading-8">Subtitles</legend>
			<div className="mt-2 space-y-2">
				<MovieConfigRadioOption props={{ id, radioTitle: "Subtitles", option: "Russian" }} />
				<MovieConfigRadioOption props={{ id, radioTitle: "Subtitles", option: "English" }} />
				<MovieConfigRadioOption props={{ id, radioTitle: "Subtitles", option: "Native" }} />
				<MovieConfigRadioOption props={{ id, radioTitle: "Subtitles", option: "None" }} />
			</div>
		</div>
	)
};

export default Subtitles;
