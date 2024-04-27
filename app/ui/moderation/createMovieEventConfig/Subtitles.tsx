let Subtitles = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<fieldset className="flex gap-2">
			<legend className="text-sm font-semibold leading-8 after:content-['*'] after:ml-0.5 after:text-red-500">Subtitles</legend>
			<input
				id={`movieConfigSubtitlesRussian-${id}`}
				name={`movieConfigSubtitles-${id}`}
				value={"RUSSIAN"}
				type="radio"
				className={"hidden peer/RUSSIAN"}
				required
			/>
			<label htmlFor={`movieConfigSubtitlesRussian-${id}`} className={"inline-block peer-checked/RUSSIAN:text-selected text-sm leading-8"}>
				Russian
			</label>
			<input
				id={`movieConfigSubtitlesEnglish-${id}`}
				name={`movieConfigSubtitles-${id}`}
				value={"ENGLISH"}
				type="radio"
				className={"hidden peer/ENGLISH"}
				required
			/>
			<label htmlFor={`movieConfigSubtitlesEnglish-${id}`} className={"inline-block peer-checked/ENGLISH:text-selected text-sm leading-8"}>
				English
			</label>
			<input
				id={`movieConfigSubtitlesNative-${id}`}
				name={`movieConfigSubtitles-${id}`}
				value={"NATIVE"}
				type="radio"
				className="hidden peer/NATIVE"
				required
			/>
			<label htmlFor={`movieConfigSubtitlesNative-${id}`} className="inline-block peer-checked/NATIVE:text-selected text-sm leading-8">
				Native
			</label>
			<input
				id={`movieConfigSubtitlesNone-${id}`}
				name={`movieConfigSubtitles-${id}`}
				value={"NONE"}
				type="radio"
				className="hidden peer/NONE"
				required
			/>
			<label htmlFor={`movieConfigSubtitlesNone-${id}`} className="inline-block peer-checked/NONE:text-selected text-sm leading-8">
				No subs
			</label>
		</fieldset>
	)
};

export default Subtitles;
