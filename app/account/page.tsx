import dynamic from 'next/dynamic';
import Link from 'next/link'

import { cookies } from 'next/headers';
import { DateTime } from "luxon";
import { redirect } from 'next/navigation';
import getProfileData from '@/app/actions/user/getProfileData';
import { SettingsIcon, VisitsIcon, LevelIcon, Trophy } from '@/app/ui/icons/icons';

const Visits = dynamic(() => import('./Visits'));

export default async function AccountPage() {

	const sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');

	let user = await getProfileData(sid);

	const { hue, username, firstName, visits, level, wins, createdAt } = user;

	let registrationDateString = DateTime.fromJSDate(createdAt).setLocale('en-US').toLocaleString(DateTime.DATE_SHORT);
	let letter = firstName[0].toUpperCase();

	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-col ring-1 space-y-4 ring-border dark:ring-darkborder p-4 w-full shadow-lg rounded-md bg-cardBG dark:bg-darkcardBG">
				<div className="flex justify-between">
					<div title="pfp change is not implemented yet" className={`rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-20 h-20 text-3xl font-bold flex justify-center items-center`}><span className="text-white drop-shadow-md">{letter}</span></div>
					<div className="p-2 space-y-2 rounded-lg">
						<div className="flex items-center gap-1">
							<div className="dark:text-darkspecialIcons text-specialIcons">{LevelIcon}</div>
							<span className="w-12 text-sm font-semibold ">Level:</span>
							<span className="w-6">{level}</span>
						</div>
						<div className="flex gap-1 items-center">
							<div className="dark:text-darkspecialIcons text-specialIcons">{Trophy}</div>
							<span className="w-12 text-sm font-semibold ">Wins:</span>
							<span className="w-6">{wins}</span>
						</div>
						<div className="flex gap-1 items-center">
							<div className="dark:text-darkspecialIcons text-specialIcons">{VisitsIcon}</div>
							<span className="w-12 text-sm font-semibold ">Visits:</span>
							<span className="w-6">{visits}</span>
						</div>
					</div>
				</div>
				<div className="p-2 flex justify-between">
					<div>
						<div className="overflow-x-auto">@{username}</div>
						<div className="overflow-x-auto">aka {firstName}</div>
					</div>
					<Link href="/account/settings">{SettingsIcon}</Link>
				</div>
				<span title="date of registration" className="font-light text-sm self-end">Member since {registrationDateString}</span>
			</div>

			<Visits />
		</div>
	)
}
/*
 *
				<div className="p-2 border rounded-md border-inputBorder">
					<div className="flex justify-between text-sm font-semibold">
						<div>Username</div>
						<Link title="edit username" className="hover:text-active dark:hover:text-darkactive md:active:scale-90 active:scale-75 duration-300" href="/account/username">{PencilMicro}</Link>
					</div>
					<div className="overflow-x-auto">{username}</div>
				</div>
				<div className="p-2 border rounded-md border-inputBorder">
					<div className="flex justify-between text-sm font-semibold">
						<div className="flex gap-2">
							<div>Email</div>
							<div className="text-specialIcons dark:text-darkspecialIcons self-center">{verifiedEmailIcon}</div>
						</div>
						<Link title="edit email" className="hover:text-active dark:hover:text-darkactive md:active:scale-90 active:scale-75 duration-300" href="/account/email">{PencilMicro}</Link>
					</div>
					<div className="overflow-x-auto">{email}</div>
				</div>
				<div className="p-2 border rounded-md border-inputBorder">
					<div className="flex justify-between text-sm font-semibold">
						<div>First Name</div>
						<Link title="edit first name" className="hover:text-active dark:hover:text-darkactive md:active:scale-90 active:scale-75 duration-300" href="/account/firstName">{PencilMicro}</Link>
					</div>
					<div className="overflow-x-auto whitespace-nowrap">{firstName}</div>
				</div>
				*/

/*
 *
<div>
 <BackButton />
</div>
<Link href="/account/password" className="btn">
 <span>Change Password</span>
</Link>
{(role !== 'REGULAR') &&
 <Link href="/request" className="btn">
	 <span>Post a Request</span>
	 <span>{PencilIcon}</span>
 </Link>}
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
