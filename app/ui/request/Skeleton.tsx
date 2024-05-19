import Back from '@/app/ui/buttons/Back';
import { ThumbsUpMini, ThumbsDownMini } from '@/app/ui/icons/miniIcons';
import { CheckIcon, XIcon } from '@/app/ui/icons/icons';

export default function Event() {
	return (
		<div className="mx-auto px-5 flex flex-col max-w-xl w-full">
			<div className="mt-20 bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder p-2">
				<div className="p-2">
					<div className="h-[4.5rem] w-full flex bg-loading dark:bg-darkloading rounded-md animate-pulse"> </div>
				</div>
				<div className="flex flex-col mt-4 gap-3 p-2">
					<div>
						<div className="text-sm font-semibold">Starts at</div>
						<div className="h-6 w-44 bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
					</div>
					<div>
						<div className="text-sm font-semibold">Location</div>
						<div className="h-6 w-44 bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
					</div>
					<div className="flex gap-1 items-center">
						<div className="text-sm font-semibold">Description</div>
						<div className="h-4 w-4 bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
					</div>
					<div>
						<span>
							<span className="text-sm font-semibold">Votes</span>
							<span className={`text-green-500 flex gap-2 items-center`}>
								<span>{CheckIcon}</span>
								<span>:</span>
								<span className="w-6 h-6 bg-loading dark:bg-darkloading rounded-md animate-pulse"></span>
							</span>
							<span className={`text-red-500 flex gap-2 items-center`}>
								<span>{XIcon}</span>
								<span>:</span>
								<span className="w-6 h-6 bg-loading dark:bg-darkloading rounded-md animate-pulse"></span>
							</span>
						</span>
						<div className="flex text-gray-500 gap-4 mt-3">
							<div className="leading-6">
								<button className="animate-pulse">
									{ThumbsUpMini}
								</button>
							</div>
							<div className="leading-6">
								<button className="animate-pulse">
									{ThumbsDownMini}
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<div className="h-5 w-20 bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
						<div className="h-5 w-12 bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
					</div>
					<div className="h-5 w-20 self-center bg-loading dark:bg-darkloading rounded-md animate-pulse"></div>
				</div>
			</div>
			<div className="flex flex-row-reverse">
				<Back />
			</div>
		</div>
	)
}
