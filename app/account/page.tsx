import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import logOut from '@/app/actions/user/logOut';
import getProfileData from '@/app/actions/user/getProfileData';
import { VerifiedIcon, UnverifiedIcon, VisitsIcon, LevelIcon, Trophy, UserDataIcon, LogOutIcon, EditIcon } from '@/app/ui/icons';
import { UserStatus } from '@/app/types/user/enums/userStatus.enum';
import EventSimpleField from './EventSimpleField';

export default async function AccountPage() {

	console.log('AccountPage');

	const sid = cookies().get('connect.sid');

	if (!sid) redirect('/signin');

	let t1 = performance.now();

	let user = await getProfileData(sid);

	let t2 = performance.now();

	console.log(t2 - t1);

	if (user === false || user === true) redirect('/signin');

	const { hue, username, email, fullName, status, role, visits, level, wins } = user;
	let letter = username[0].toUpperCase();
	console.log(hue);

	let verifiedEmailIcon = status === UserStatus.VERIFIED ? VerifiedIcon : UnverifiedIcon;

	return (
		<div className="px-5 md:mt-5 mt-16 w-full max-w-2xl flex flex-col item-center">
			<div className="ring-1 md:items-center md:grid gap-y-4 md:grid-cols-2 ring-border dark:ring-darkborder p-4 w-full gap-2 flex flex-col shadow-lg rounded-md bg-cardBG dark:bg-darkcardBG">
				<div id="avatar" className={`rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-20 h-20 text-3xl font-bold flex justify-center items-center`}><span className="drop-shadow-md">{letter}</span></div>
				<div></div>
				<div className="p-2 flex gap-3 rounded-lg">
					<div className="flex gap-1">
						<div>{level}</div>
						<div className="dark:text-darkspecialIcons text-specialIcons">{LevelIcon}</div>
					</div>
					<div className="flex gap-1">
						<div>{wins}</div>
						<div className="dark:text-darkspecialIcons text-specialIcons">{Trophy}</div>
					</div>
					<div className="flex gap-1">
						<div>{visits}</div>
						<div className="dark:text-darkspecialIcons text-specialIcons">{VisitsIcon}</div>
					</div>
				</div>
				<EventSimpleField props={{ title: "Username", value: username }} />
				<div className="p-2 flex align-center justify-between rounded-lg">
					<div>
						<div className="text-sm font-semibold">Email</div>
						<div>{email}</div>
					</div>
					<div className="text-specialIcons dark:text-darkspecialIcons self-center">{verifiedEmailIcon}</div>
				</div>
				<EventSimpleField props={{ title: "Full Name", value: fullName || 'N/A' }} />
			</div>
			<div className="text-sm space-y-4">
				<div className="mt-4">
					<Link href="/account/update" className="px-4 py-2 w-fit flex gap-4 hover:text-active dark:hover:text-darkactive ring-1 rounded-md dark:ring-darkborder ring-border font-bold bg-button dark:bg-darkbutton">
						<span>Change Userdata</span>
						<span>{UserDataIcon}</span>
					</Link>
				</div>
				<div>
					<form action={logOut}>
						<button className="px-4 py-2 flex gap-4 rounded-md shadow-lg ring-1 ring-border dark:ring-darkborder bg-button dark:bg-darkbutton font-bold hover:text-active dark:hover:text-darkactive">
							<span>Log Out</span>
							<span>{LogOutIcon}</span>
						</button>
					</form>
				</div>
				{(role === 'ADMINISTRATOR' || role === 'MODERATOR') && <Link href="/mod" className="bg-button dark:bg-darkbutton px-4 py-2 flex gap-4 rounded-md shadow-lg w-fit font-bold hover:text-active dark:hover:text-darkactive ring-1 ring-border dark:ring-darkborder">
					<span>Mod</span>
					<span>{EditIcon}</span>
				</Link>}
			</div>

		</div>
	)
}

//import logOutAll from '@/app/actions/user/logOutAll';
/*
 *
				<div>
					<form action={logOutAll}>
						<button className="px-4 py-2 flex gap-4 rounded-md shadow-lg border-2 border-slate-600 font-bold hover:text-rose-600">
							<span>Log Out from all devices</span>
							<span>{LogOutIcon}</span>
						</button>
					</form>
				</div>
				*/
