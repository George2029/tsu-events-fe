export default function Title() {
	return (
		<label htmlFor="title" className="custom-label">
			<span>
				Title
			</span>
			<input
				type="text"
				name="title"
				id="title"
				autoComplete="title"
				placeholder="Spring Contest #12"
				maxLength={50}
				required
			/>
		</label>
	)
}
