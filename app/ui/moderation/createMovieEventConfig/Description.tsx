let Description = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<div>
			<label htmlFor={`movieConfigDescription-${id}`} className="block text-sm  font-semibold leading-6">
				Description
			</label>
			<div className="mt-2">
				<textarea
					id={`movieConfigDescription-${id}`}
					name={`movieConfigDescription-${id}`}
					rows={2}
					className="w-full rounded-md dark:bg-gray-700"
					placeholder="It will be great, trust"
					maxLength={1000}
				/>
			</div>
			<p className="mt-2 text-sm leading-6 text-gray-500">Write a few sentences about the event.</p>
		</div>
	)
};

export default Description
