import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import logOut from '@/app/actions/user/logOut';
import logOutAll from '@/app/actions/user/logOutAll';
import getProfileData from '@/app/actions/user/getProfileData';


export default async function AccountPage() {

	console.log('AccountPage');

	const sid = cookies().get('connect.sid');

	if (!sid) redirect('/signin');

	let user = await getProfileData(sid);

	if (user === false || user === true) redirect('/signin');

	const { id, username, email, fullName, status, role, visits, level, wins } = user;

	return (
		<div className="w-full max-w-2xl flex flex-col item-center">
			<div className="flex flex-col items-center">
				<h2 className="text-xl mb-4 p-2">Your Profile</h2>
				<div className="p-4 grid grid-cols-2 gap-2 shadow-lg rounded-md bg-slate-100 dark:bg-emerald-950">
					<span className="">Username:</span>
					<span className="overflow-scroll font-bold">{username}</span>
					<span className="">Email:</span>
					<span className="overflow-scroll font-bold">{email}</span>
					<span className="">Full Name:</span>
					<span className="overflow-scroll font-bold">{fullName || 'N/A'}</span>
					<span className="">Status:</span>
					<span className="font-bold">{status.toLowerCase()}</span>
					<span className="">Role:</span>
					<span className="font-bold">{role.toLowerCase()}</span>
					<span className="">Visits:</span>
					<span className="font-bold">{visits}</span>
					<span className="">Wins:</span>
					<span className="font-bold">{wins}</span>
					<span className="">Level:</span>
					<span className="font-bold">{level}</span>
				</div>
			</div>
			<Link className="mt-4 self-center shadow-lg" href="/account/update">
				<button className="px-4 py-2 rounded-md border-2 font-bold border-slate-600">Change Userdata
				</button>
			</Link>
			<div className="mt-4 flex flex-col self-center items-center space-y-2">
				<form action={logOut}>
					<button className="px-4 py-2 rounded-md shadow-lg border-2 font-bold border-rose-600">Log Out</button>
				</form>
				<form action={logOutAll}>
					<button className="px-4 py-2 rounded-md shadow-lg border-2 font-bold border-rose-600">Log Out from all devices</button>
				</form>
			</div>

		</div>
	)
}
