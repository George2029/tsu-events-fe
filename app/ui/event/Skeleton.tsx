import Back from '@/app/ui/Back';
import { UserGroup, Config } from '@/app/ui/icons';

export default function EventLoader() {
	return (
		<div className="mx-auto px-5 flex flex-col max-w-xl w-full">
			<div className="mt-20 bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder p-2">
				<div className="p-2">
					<div className="h-[4.5rem] w-full flex bg-loading dark:bg-darkloading rounded-md animate-pulse "> </div>
				</div>
				<div className="flex flex-col mt-4 gap-3 p-2">
					<div>
						<div className="text-sm font-semibold">Starts at</div>
						<div className="h-6 w-44 bg-loading dark:bg-darkloading rounded-md animate-pulse "></div>
					</div>
					<div>
						<div className="text-sm font-semibold">Location</div>
						<div className="h-6 w-full bg-loading dark:bg-darkloading rounded-md animate-pulse "></div>
					</div>
					<div className="flex gap-1 items-center">
						<div className="text-sm font-semibold">Description</div>
						<div className="h-4 w-4 bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
					</div>
					<div className="flex flex-col gap-4">
						<div className=" flex gap-2 justify-between">
							<div className="flex gap-4">
								<div>
									<div className="text-sm font-semibold">Participants</div>
									<div className="mt-2 w-24 items-center flex gap-1">
										<span className="text-sm font-semibold">Places:</span>
										<span className="w-8 h-6 bg-loading dark:bg-darkloading rounded-md animate-pulse "></span>
									</div>
								</div>
								<div className="flex gap-2">
									<div className="self-center text-specialIcons dark:text-darkspecialIcons animate-pulse">{UserGroup}</div>
									<span className="self-center w-8 h-6 bg-loading dark:bg-darkloading animate-pulse rounded-md"></span>
								</div>
							</div>
							<div className="h-[3.25rem] w-32 bg-loading dark:bg-darkloading rounded-md animate-pulse "></div>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="text-sm font-semibold">Event Configs</div>
						<div className="flex gap-2">
							<div className="h-5 w-8 bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
							<div className="text-specialIcons dark:text-darkspecialIcons animate-pulse">{Config}</div>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="h-5 w-20 bg-loading dark:bg-darkloading rounded-md animate-pulse "></div>
						<div className="h-5 w-12 bg-loading dark:bg-darkloading rounded-md animate-pulse "></div>
					</div>
				</div>
			</div>
			<div className="flex flex-row-reverse">
				<Back />
			</div>
		</div>
	)
}