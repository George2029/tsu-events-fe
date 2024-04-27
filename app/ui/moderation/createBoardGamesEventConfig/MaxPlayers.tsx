let MaxPlayers = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`boardGamesConfigMaxPlayers-${id}`} className="block text-sm">
			<span className="block font-semibold after:ml-0.5 after:content-['*'] after:text-red-500">Maximum number of Players</span>
			<input
				id={`boardGamesConfigMaxPlayers-${id}`}
				name={`boardGamesConfigMaxPlayers-${id}`}
				type="number"
				min={4}
				max={20}
				className="mt-1 rounded-md dark:bg-gray-700"
				placeholder="4"
				required
			/>
		</label>
	)
};

export default MaxPlayers;
