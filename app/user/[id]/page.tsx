import { VisitsIcon, LevelIcon, Trophy } from '@/app/ui/icons/icons';
import { DateTime } from "luxon";
import getUserPublic from '@/app/actions/user/getUserPublic';

export default async function UserPublicPage({ params }: { params: { id: string } }) {
	let { id } = params;
	let userPublic = await getUserPublic(id);
	let { firstName, username, wins, visits, hue, level, createdAt } = userPublic;
	let registrationDateString = DateTime.fromJSDate(createdAt).toLocaleString(DateTime.DATE_SHORT);
	let letter = firstName[0].toUpperCase();

	return (
		<div className="flex w-full flex-col ring-1 space-y-4 ring-border dark:ring-darkborder p-4 w-full shadow-lg rounded-md bg-cardBG dark:bg-darkcardBG">
			<div className="flex justify-between">
				<div className={`rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-20 h-20 text-3xl font-bold flex justify-center items-center`}><span className="drop-shadow-md">{letter}</span></div>
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
			<div className="p-2">
				<div className="overflow-x-auto">@{username}</div>
				<div className="overflow-x-auto">aka {firstName}</div>
			</div>
			<span className="font-light text-sm self-end">Member since {registrationDateString}</span>

		</div>
	)
}
