let Description = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`boardGamesConfigDescription-${id}`} className="block text-sm">
			<span className="block font-semibold">Description</span>
			<textarea
				id={`boardGamesConfigDescription-${id}`}
				name={`boardGamesConfigDescription-${id}`}
				rows={2}
				className="mt-1 w-full rounded-md dark:bg-gray-700"
				placeholder="A decent game for friends"
				maxLength={1000}
			/>
			<p className="mt-2 text-sm leading-6 text-gray-500">Write a few sentences about the game.</p>
		</label>
	)
};

export default Description
