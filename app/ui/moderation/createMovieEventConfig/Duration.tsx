let Duration = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<div>
			<label htmlFor={`movieConfigDuration-${id}`} className="block text-sm  font-semibold leading-6">
				Duration
			</label>
			<div className="mt-2">
				<div>
					<input
						id={`movieConfigDuration-${id}`}
						name={`movieConfigDuration-${id}`}
						type="text"
						className="rounded-lg dark:bg-gray-700"
						placeholder="2:30"
						pattern="^\d:\d\d$"
						required
					/>
				</div>
			</div>
			<p className="mt-2 text-sm leading-6 text-gray-500">Hours(1 digit):Minutes(2 digits)</p>
		</div>
	)

}

export default Duration;
