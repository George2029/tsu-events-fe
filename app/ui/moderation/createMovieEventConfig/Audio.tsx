export default function Audio({ props }: { props: { id: number } }) {
	let { id } = props;
	return (
		<fieldset className="flex gap-2">
			<legend className="text-sm font-semibold leading-8 after:content-['*'] after:ml-0.5 after:text-red-500">Audio</legend>
			<input
				id={`movieConfigAudioRussian-${id}`}
				name={`movieConfigAudio-${id}`}
				value={"RUSSIAN"}
				type="radio"
				className={"hidden peer/RUSSIAN"}
				required
			/>
			<label htmlFor={`movieConfigAudioRussian-${id}`} className={"inline-block peer-checked/RUSSIAN:text-selected text-sm leading-8"}>
				Russian
			</label>
			<input
				id={`movieConfigAudioEnglish-${id}`}
				name={`movieConfigAudio-${id}`}
				value={"ENGLISH"}
				type="radio"
				className={"hidden peer/ENGLISH"}
				required
			/>
			<label htmlFor={`movieConfigAudioEnglish-${id}`} className={"inline-block peer-checked/ENGLISH:text-selected text-sm leading-8"}>
				English
			</label>
			<input
				id={`movieConfigAudioNative-${id}`}
				name={`movieConfigAudio-${id}`}
				value={"NATIVE"}
				type="radio"
				className="hidden peer/NATIVE"
				required
			/>
			<label htmlFor={`movieConfigAudioNative-${id}`} className="inline-block peer-checked/NATIVE:text-selected text-sm leading-8">
				Native
			</label>
		</fieldset>
	)
};
