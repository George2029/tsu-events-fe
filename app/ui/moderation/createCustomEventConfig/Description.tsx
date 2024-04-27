let Description = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`customConfigDescription-${id}`} className="block text-sm">
			<span className="block font-semibold">Description</span>
			<textarea
				id={`customConfigDescription-${id}`}
				name={`customConfigDescription-${id}`}
				rows={2}
				className="mt-1 w-full rounded-md dark:bg-gray-700"
				placeholder="Historical debates"
				maxLength={1000}
			/>
			<p className="mt-2 text-sm leading-6 text-gray-500">Write a few sentences about the event.</p>
		</label>
	)
};

export default Description
