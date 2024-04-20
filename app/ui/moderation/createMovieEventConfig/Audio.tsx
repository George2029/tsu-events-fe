import MovieConfigRadioOption from './RadioOption';

export default function Audio({ props }: { props: { id: number } }) {
	let { id } = props;
	return (
		<div>
			<legend className="text-sm font-semibold leading-8">Audio</legend>
			<div className="mt-2 space-y-2">
				<MovieConfigRadioOption props={{ id, radioTitle: "Audio", option: "Russian" }} />
				<MovieConfigRadioOption props={{ id, radioTitle: "Audio", option: "English" }} />
				<MovieConfigRadioOption props={{ id, radioTitle: "Audio", option: "Native" }} />
			</div>
		</div>
	)
};
