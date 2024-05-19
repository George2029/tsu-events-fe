export default function Type({ props }: { props: { existingValue: string } }) {
	const { existingValue } = props;
	let display = (str: string): string => {
		str = str.toLowerCase().split('_').join(' ');
		return str[0].toUpperCase() + str.substring(1);
	}

	return (
		<fieldset>
			<label htmlFor="status" className="block text-sm font-semibold ">Edit status:</label>
			<select name="status" id="status" className="mt-1 text-sm rounded-md border border-slate-300 placeholder-slate-400 focus:ring-1 focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:border-focused bg-white dark:bg-gray-700">
				<option value="">{display(existingValue)}</option>
				<option value="NOTPASSED" hidden={existingValue === "NOTPASSED"}>Notpassed</option>
				<option value="PASSED" hidden={existingValue === "PASSED"}>Passed</option>
				<option value="CANCELED" hidden={existingValue === "CANCELED"}>Canceled</option>
			</select>
		</fieldset>
	)
}

