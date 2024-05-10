import { cookies } from 'next/headers';
import { DateTime } from "luxon";
import Link from 'next/link';
import { redirect } from 'next/navigation';
import logOutAll from '@/app/actions/user/logOutAll';
import logOut from '@/app/actions/user/logOut';
import getProfileData from '@/app/actions/user/getProfileData';
import { VisitsIcon, LevelIcon, Trophy, LogOutIcon, EditIcon, PencilIcon } from '@/app/ui/icons';
import { PencilMicro, CheckBadgeMicro, QuestionMarkMicro } from '@/app/ui/microIcons';
import { UserStatus } from '@/app/types/user/enums/userStatus.enum';

export default async function AccountPage() {

	const sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');

	let t1 = performance.now();
	let user = await getProfileData(sid);
	let t2 = performance.now();

	console.log(t2 - t1);

	if (user === false || user === true) redirect('/signin');

	const { hue, username, email, firstName, status, role, visits, level, wins, createdAt } = user;
	let registrationDateString = DateTime.fromJSDate(createdAt).toLocaleString(DateTime.DATE_SHORT);
	let letter = firstName[0].toUpperCase();
	console.log(hue);

	let verifiedEmailIcon = status === UserStatus.VERIFIED ? CheckBadgeMicro : QuestionMarkMicro;

	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-col ring-1 space-y-4 ring-border dark:ring-darkborder p-4 w-full shadow-lg rounded-md bg-cardBG dark:bg-darkcardBG">
				<div className="flex justify-between">
					<div className={`rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-20 h-20 text-3xl font-bold flex justify-center items-center`}><span className="text-white drop-shadow-md">{letter}</span></div>
					<div className="p-2 space-y-2 rounded-lg">
						<div className="flex items-center gap-1">
							<div className="dark:text-darkspecialIcons text-specialIcons">{LevelIcon}</div>
							<span className="w-12 text-sm font-semibold ">Level:</span>
							<span>{level}</span>
						</div>
						<div className="flex gap-1 items-center">
							<div className="dark:text-darkspecialIcons text-specialIcons">{Trophy}</div>
							<span className="w-12 text-sm font-semibold ">Wins:</span>
							<span>{wins}</span>
						</div>
						<div className="flex gap-1 items-center">
							<div className="dark:text-darkspecialIcons text-specialIcons">{VisitsIcon}</div>
							<span className="w-12 text-sm font-semibold ">Visits:</span>
							<span>{visits}</span>
						</div>
					</div>
				</div>
				<div className="p-2 border rounded-md border-inputBorder">
					<div className="flex justify-between text-sm font-semibold">
						<div>Username</div>
						<Link className="hover:text-active dark:hover:text-darkactive md:active:scale-90 active:scale-75 duration-300" href="/account/username">{PencilMicro}</Link>
					</div>
					<div className="overflow-scroll">{username}</div>
				</div>
				<div className="p-2 border rounded-md border-inputBorder">
					<div className="flex justify-between text-sm font-semibold">
						<div className="flex gap-2">
							<div>Email</div>
							<div className="text-specialIcons dark:text-darkspecialIcons self-center">{verifiedEmailIcon}</div>
						</div>
						<Link className="hover:text-active dark:hover:text-darkactive md:active:scale-90 active:scale-75 duration-300" href="/account/email">{PencilMicro}</Link>
					</div>
					<div className="overflow-scroll">{email}</div>
				</div>
				<div className="p-2 border rounded-md border-inputBorder">
					<div className="flex justify-between text-sm font-semibold">
						<div>First Name</div>
						<Link className="hover:text-active dark:hover:text-darkactive md:active:scale-90 active:scale-75 duration-300" href="/account/firstName">{PencilMicro}</Link>
					</div>
					<div className="overflow-scroll whitespace-nowrap">{firstName}</div>
				</div>
				<span className="font-light text-sm self-end">Member since {registrationDateString}</span>
			</div>
			<Link href="/account/password" className="self-end mt-5 px-4 py-2 w-fit flex gap-4 hover:text-active dark:hover:text-darkactive ring-1 rounded-md dark:ring-darkborder ring-border font-bold bg-button dark:bg-darkbutton">
				<span className="text-sm">Change Password</span>
			</Link>
			{(role !== 'REGULAR') && <Link href="/exp/request" className="self-end mt-5 bg-button dark:bg-darkbutton px-4 py-2 flex gap-4 rounded-md shadow-lg w-fit hover:text-active dark:hover:text-darkactive ring-1 ring-border dark:ring-darkborder">
				<span className="font-bold text-sm">Post a Request</span>
				<span>{PencilIcon}</span>
			</Link>}
			{(role === 'ADMINISTRATOR' || role === 'MODERATOR') && <Link href="/mod" className="self-end mt-5 bg-button dark:bg-darkbutton px-4 py-2 flex gap-4 rounded-md shadow-lg w-fit hover:text-active dark:hover:text-darkactive ring-1 ring-border dark:ring-darkborder">
				<span className="font-bold text-sm">Mod</span>
				<span>{EditIcon}</span>
			</Link>}
			<form action={logOut} className="self-end mt-5 ">
				<button className="px-4 py-2 flex gap-4 rounded-md shadow-lg ring-1 ring-border dark:ring-darkborder bg-button dark:bg-darkbutton font-bold hover:text-active dark:hover:text-darkactive">
					<span className="font-bold text-sm">Log Out</span>
					<span>{LogOutIcon}</span>
				</button>
			</form>
			<form action={logOutAll} className="self-end mt-5 ">
				<button className="px-4 py-2 flex gap-4 rounded-md shadow-lg ring-1 ring-border dark:ring-darkborder bg-button dark:bg-darkbutton hover:text-active dark:hover:text-darkactive">
					<span className="font-bold text-sm">Log Out from all devices</span>
					<span>{LogOutIcon}</span>
				</button>
			</form>

		</div>
	)
}
