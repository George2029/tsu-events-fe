let Duration = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`movieConfigDuration-${id}`} className="block text-sm">
			<span className="block font-semibold">Duration</span>
			<input
				id={`movieConfigDuration-${id}`}
				name={`movieConfigDuration-${id}`}
				type="text"
				className="mt-1 rounded-md dark:bg-gray-700"
				placeholder="2:30"
				pattern="^\d:\d\d$"
				required
			/>
			<p className="mt-1 text-gray-500">Hours(1 digit):Minutes(2 digits)</p>
		</label>
	)

}

export default Duration;
