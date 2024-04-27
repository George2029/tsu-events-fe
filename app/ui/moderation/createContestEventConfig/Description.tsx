let Description = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`contestConfigDescription-${id}`} className="block text-sm">
			<span className="block font-semibold">Description</span>
			<textarea
				id={`contestConfigDescription-${id}`}
				name={`contestConfigDescription-${id}`}
				rows={2}
				className="mt-1 w-full rounded-md dark:bg-gray-700"
				placeholder="the trade is an essential business in human world, it's time to bring it to a new level"
				maxLength={1000}
			/>
			<p className="mt-2 text-sm leading-6 text-gray-500">Write a few sentences about the contest.</p>
		</label>
	)
};

export default Description
