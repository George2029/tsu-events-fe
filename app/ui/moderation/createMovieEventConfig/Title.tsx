let Title = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`movieConfigTitle-${id}`} className="block text-sm">
			<span className="block font-semibold after:text-red-500 after:ml-0.5 after:content-['*'] ">Title</span>
			<input
				id={`movieConfigTitle-${id}`}
				name={`movieConfigTitle-${id}`}
				type="text"
				autoComplete="title"
				className="mt-1 rounded-md"
				placeholder="Some Event"
				maxLength={50}
				required
			/>
		</label>
	)
};

export default Title;
