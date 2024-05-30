import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import getProfileData from '@/app/actions/user/getProfileData';
import Link from 'next/link';
import logOut from '@/app/actions/user/logOut';
import logOutAll from '@/app/actions/user/logOutAll';
import { PencilMicro } from '@/app/ui/icons/microIcons';
import Email from '@/app/ui/user/settings/email';
import Username from '@/app/ui/user/settings/username';
import FirstName from '@/app/ui/user/settings/firstName';
import { KeyIcon, MinusUser, MailIcon, AtSymbol, UserIcon, EditIcon, PencilIcon, LogOutIcon, EyeIcon, LockIcon } from '@/app/ui/icons/icons';

export default async function SettignsPage() {

	const sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');

	let user = await getProfileData(sid);

	const { username, firstName, email, role } = user;

	console.log(`${username} entered settings page`);

	return (
		<div className="flex flex-col">
			<span className="self-center text-xl font-bold">Settings</span>

			<span className="flex gap-2 items-center mt-5 self-center font-bold">Public Information</span>

			<div className="mt-5 *:p-3 bg-cardBG dark:bg-darkcardBG ring-border dark:ring-darkborder ring-1 shadow-lg rounded-lg">
				<Username props={{ username }} />
				<FirstName props={{ firstName }} />
			</div>

			<span className="flex gap-2 mt-5 items-center self-center font-bold">Private Information </span>

			<div className="mt-5 *:p-3 bg-cardBG dark:bg-darkcardBG ring-border dark:ring-darkborder ring-1 shadow-lg rounded-lg">
				<div className="flex gap-4 items-center ">
					<div className="text-specialIcons dark:text-darkspecialIcons">{KeyIcon}</div>
					<div className="text-sm">Password</div>
				</div>
				<Email props={{ email }} />
			</div>

			<span className="flex gap-2 mt-5 items-center self-center font-bold">Account</span>

			<div className="mt-5 *:p-3 bg-cardBG dark:bg-darkcardBG ring-border dark:ring-darkborder ring-1 shadow-lg rounded-lg">
				<form action={logOut}>
					<button type="submit" className="group flex gap-4 items-center ">
						<div className="text-red-500 dark:text-red-200">{LogOutIcon}</div>
						<div className="text-sm font-semibold group-hover:text-active dark:group-hover:text-darkactive">Log out</div>
					</button>
				</form>
				<form action={logOutAll}>
					<button type="submit" className="group flex items-center gap-4">
						<div className="text-red-500 dark:text-red-400">{LogOutIcon}</div>
						<div className="text-sm font-semibold  group-hover:text-active dark:group-hover:text-darkactive">Log out from all devices</div>
					</button>
				</form>
				<button className="group flex items-center gap-4">
					<div className="text-red-500">{MinusUser}</div>
					<div className="text-sm font-semibold  group-hover:text-active dark:group-hover:text-darkactive">Delete account</div>
				</button>
			</div>
		</div>

	)
}

/*
			<Link href="/account/password" className="btn">
				<span>Change Password</span>
			</Link>
			<Link href="/request" className="btn">
				<span>Post a Request</span>
				<span>{PencilIcon}</span>
			</Link>
			{(role === 'ADMINISTRATOR' || role === 'MODERATOR') &&
				<Link href="/event" className="btn">
					<span>Post an Event</span>
					<span>{EditIcon}</span>
				</Link>}
			<form action={logOut}>
				<button className="btn">
					<span>Log Out</span>
					<span>{LogOutIcon}</span>
				</button>
			</form>
			<form action={logOutAll}>
				<button className="btn">
					<span>Log Out from all devices</span>
					<span>{LogOutIcon}</span>
				</button>
			</form>
			*/
