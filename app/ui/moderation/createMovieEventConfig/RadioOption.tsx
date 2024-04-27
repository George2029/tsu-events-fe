let RadioOption = ({ props }: { props: { id: number, radioTitle: string, option: string } }) => {
	let { id, option, radioTitle } = props;
	return (
		<>
			<input
				id={`movieConfig${radioTitle}${option}-${id}`}
				name={`movieConfig${radioTitle}-${id}`}
				value={option.toUpperCase()}
				type="radio"
				className={`hidden peer/${option}`}
				required
			/>
			<label htmlFor={`movieConfig${radioTitle}${option}-${id}`} className={`inline-block peer-checked/${option}:text-selected text-sm leading-8`}>
				{option}
			</label>
		</>
	);
}

export default RadioOption;
