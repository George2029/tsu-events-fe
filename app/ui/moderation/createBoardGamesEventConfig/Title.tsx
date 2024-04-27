let Title = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`boardGamesConfigTitle-${id}`} className="block text-sm">
			<span className="block font-semibold after:ml-0.5 after:content-['*'] after:text-red-500">Title</span>
			<input
				id={`boardGamesConfigTitle-${id}`}
				name={`boardGamesConfigTitle-${id}`}
				type="text"
				autoComplete="title"
				className="mt-1 rounded-md dark:bg-gray-700"
				placeholder="Monopoly"
				maxLength={50}
				required
			/>
		</label>
	)
};

export default Title;
