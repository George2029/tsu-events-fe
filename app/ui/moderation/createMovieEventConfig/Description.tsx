let Description = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`movieConfigDescription-${id}`} className="block text-sm">
			<span className="block font-semibold">Description</span>
			<textarea
				id={`movieConfigDescription-${id}`}
				name={`movieConfigDescription-${id}`}
				rows={2}
				className="mt-1 w-full rounded-md dark:bg-gray-700"
				placeholder="It will be great, trust"
				maxLength={1000}
			/>
			<p className="mt-1 text-sm leading-6 text-gray-500">Write a few sentences about the event.</p>
		</label>
	)
};

export default Description
