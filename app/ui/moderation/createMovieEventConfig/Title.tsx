let Title = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<div>
			<label htmlFor={`movieConfigTitle-${id}`} className="text-sm font-semibold leading-6">
				Title
			</label>
			<div>
				<div>
					<input
						id={`movieConfigTitle-${id}`}
						name={`movieConfigTitle-${id}`}
						type="text"
						autoComplete="title"
						className="rounded-lg dark:bg-gray-700"
						placeholder="Some Event"
						maxLength={50}
						required
					/>
				</div>
			</div>
		</div>
	)
};

export default Title;
