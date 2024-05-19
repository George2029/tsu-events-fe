import { VisitsIcon, LevelIcon, Trophy } from '@/app/ui/icons/icons';

export default function Loading() {
	return (
		<div className="h-[15.75rem] space-y-4 flex flex-col w-full ring-border dark:ring-darkborder gap-4 ring-1 bg-cardBG dark:bg-darkcardBG animate-pulse rounded-md p-4 shadow-lg">
			<div className="flex justify-between">
				<div className="w-20 h-20 bg-loading dark:bg-darkloading animate-pulse rounded-xl"></div>
				<div className="p-2 space-y-2 rounded-lg">
					<div className="flex items-center">
						<div className="dark:text-darkspecialIcons text-specialIcons">{LevelIcon}</div>
						<span className="ml-1 w-12 text-sm font-semibold ">Level:</span>
						<span className="ml-1 h-6 w-6 bg-cardBG dark:bg-darkcardBG animate-pulse rounded-md "></span>
					</div>
					<div className="flex items-center">
						<div className="dark:text-darkspecialIcons text-specialIcons">{Trophy}</div>
						<span className="ml-1 w-12 text-sm font-semibold ">Wins:</span>
						<span className="ml-1 h-6 w-6 bg-cardBG dark:bg-darkcardBG animate-pulse rounded-md "></span>
					</div>
					<div className="flex items-center">
						<div className="dark:text-darkspecialIcons text-specialIcons">{VisitsIcon}</div>
						<span className="ml-1 w-12 text-sm font-semibold ">Visits:</span>
						<span className="ml-1 h-6 w-6 bg-cardBG dark:bg-darkcardBG animate-pulse rounded-md "></span>
					</div>
				</div>
			</div>
			<div className="w-28 h-16 bg-loading dark:bg-darkloading animate-pulse rounded-md"></div>
			<span className="self-end w-[10rem] h-6 bg-loading dark:bg-darkloading animate-pulse rounded-md"></span>

		</div>
	)
}
