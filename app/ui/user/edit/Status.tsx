import { UserStatus } from '@/app/types/user/enums/userStatus.enum';

export default function({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	let display = (str: string): string => {
		str = str.toLowerCase().split('_').join(' ');
		return str[0].toUpperCase() + str.substring(1);
	}
	return (
		<fieldset>
			<label htmlFor="status" className="block text-sm font-semibold ">Status</label>
			<select name="status" id="status" className="mt-1 text-sm font-semibold rounded-md border border-slate-300 placeholder-slate-400 focus:ring-1 focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:border-focused bg-white dark:bg-gray-700">
				<option value="">{display(existingValue)}</option>
				<option hidden={existingValue === UserStatus.UNVERIFIED} value={UserStatus.UNVERIFIED}>Unverified</option>
				<option hidden={existingValue === UserStatus.VERIFIED} value={UserStatus.VERIFIED}>Verified</option>
				<option hidden={existingValue === UserStatus.BANNED} value={UserStatus.BANNED}>Banned</option>
			</select>
		</fieldset>
	)
}

