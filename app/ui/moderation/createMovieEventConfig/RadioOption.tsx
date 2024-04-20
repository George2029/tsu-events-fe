let RadioOption = ({ props }: { props: { id: number, radioTitle: string, option: string } }) => {
	let { id, option, radioTitle } = props;
	return (
		<div className="flex items-center gap-x-3">
			<input
				id={`movieConfig${radioTitle}${option}-${id}`}
				name={`movieConfig${radioTitle}-${id}`}
				value={option.toUpperCase()}
				type="radio"
				className="rounded-lg dark:bg-gray-700"
				required
			/>
			<label htmlFor={`movieConfig${radioTitle}${option}-${id}`} className="block text-sm font-semibold leading-6">
				{option}
			</label>
		</div>
	);
}

export default RadioOption;
