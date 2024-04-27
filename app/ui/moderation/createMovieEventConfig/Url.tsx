let Url = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`movieConfigUrl-${id}`} className="block text-sm">
			<span className="block font-semibold">URL</span>
			<input
				id={`movieConfigUrl-${id}`}
				name={`movieConfigUrl-${id}`}
				type="text"
				className="mt-1 rounded-md dark:bg-gray-700"
				placeholder="https://imdb.com/12"
				pattern="^(https:\/\/www\.imdb\.com|https:\/\/www\.kinopoisk\.ru).*"
				maxLength={200}
				required
			/>
			<p className="mt-1 text-gray-500">Link to movie on imdb or kinopoisk</p>
		</label>
	)
}

export default Url
