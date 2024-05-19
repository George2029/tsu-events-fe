export default function Status({ props }: { props: { existingValue: string } }) {
	const { existingValue } = props;
	let display = (str: string): string => {
		str = str.toLowerCase().split('_').join(' ');
		return str[0].toUpperCase() + str.substring(1);
	}
	return (
		<fieldset>
			<label htmlFor="status" className="block text-sm font-semibold ">Edit status:</label>
			<select name="status" id="status" className="mt-1 text-sm font-semibold rounded-md border border-slate-300 placeholder-slate-400 focus:ring-1 focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:border-focused bg-white dark:bg-gray-700">
				<option value="">{display(existingValue)}</option>
				<option hidden={existingValue === "NOTPASSED"} value="NOTPASSED">Not passed</option>
				<option hidden={existingValue === "ACCEPTED"} value="ACCEPTED" >Accepted</option>
				<option hidden={existingValue === "REJECTED"} value="REJECTED" >Rejected</option>
				<option hidden={existingValue === "CANCELED"} value="CANCELED" >Canceled</option>
			</select>
		</fieldset>
	)
}
