import { UserRole } from '@/app/types/user/enums/userRole.enum';

export default function({ props }: { props: { existingValue: string } }) {
	let { existingValue } = props;
	let display = (str: string): string => {
		str = str.toLowerCase().split('_').join(' ');
		return str[0].toUpperCase() + str.substring(1);
	}
	return (
		<fieldset>
			<label htmlFor="role" className="block text-sm font-semibold ">Role</label>
			<select name="role" id="role" className="mt-1 text-sm font-semibold rounded-md border border-slate-300 placeholder-slate-400 focus:ring-1 focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:border-focused bg-white dark:bg-gray-700">
				<option value="">{display(existingValue)}</option>
				<option hidden={existingValue === UserRole.REGULAR} value={UserRole.REGULAR}>Regular</option>
				<option hidden={existingValue === UserRole.EXPERIENCED} value={UserRole.EXPERIENCED}>Experienced</option>
				<option hidden={existingValue === UserRole.MODERATOR} value={UserRole.MODERATOR}>Moderator</option>
				<option hidden={existingValue === UserRole.ADMINISTRATOR} value={UserRole.ADMINISTRATOR}>Administrator</option>
			</select>
		</fieldset>
	)
}

