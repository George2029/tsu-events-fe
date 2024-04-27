let Prize = ({ props }: { props: { id: number } }) => {
	let { id } = props;
	return (
		<label htmlFor={`contestConfigPrize-${id}`} className="block text-sm">
			<span className="block font-semibold after:ml-0.5 after:content-['*'] after:text-red-500">Prize</span>
			<input
				id={`contestConfigPrize-${id}`}
				name={`contestConfigPrize-${id}`}
				type="text"
				autoComplete="title"
				className="mt-1 rounded-md dark:bg-gray-700"
				placeholder="300$"
				maxLength={50}
				required
			/>
		</label>
	)
};

export default Prize;
