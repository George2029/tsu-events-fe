let Url = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<div>
			<label htmlFor={`movieConfigUrl-${id}`} className="block text-sm font-semibold leading-6">
				URL
			</label>
			<div className="mt-2">
				<div>
					<input
						id={`movieConfigUrl-${id}`}
						name={`movieConfigUrl-${id}`}
						type="text"
						className="rounded-lg dark:bg-gray-700"
						placeholder="https://imdb.com/12"
						pattern="^(https:\/\/www\.imdb\.com|https:\/\/www\.kinopoisk\.ru).*"
						maxLength={200}
						required
					/>
				</div>
			</div>
			<p className="mt-2 text-sm leading-6 text-gray-500">Link to movie on imdb or kinopoisk</p>
		</div>
	)
}

export default Url
