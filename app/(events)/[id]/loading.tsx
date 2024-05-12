import Back from '@/app/ui/Back';

export default function Event() {
	return (
		<div className="px-5 flex flex-col max-w-xl w-full">
			<div className="mt-20 bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder p-2">
				<div className="h-7 w-full flex bg-loading dark:bg-darkloading rounded-md"></div>
				<div className="space-y-4 mt-4">
					<div className="p-2 ">
						<div className="text-sm font-semibold">Location</div>
						<div className="h-6 w-full bg-loading dark:bg-darkloading rounded-md "></div>
					</div>
					<div className="p-2 ">
						<div className="text-sm font-semibold">Description</div>
						<div className="h-6 w-full bg-loading dark:bg-darkloading rounded-md "></div>
					</div>
					<div className="p-2 rounded-lg">
						<div className="text-sm font-semibold">Starts at</div>
						<div className="h-6 w-44 bg-loading dark:bg-darkloading rounded-md "></div>
					</div>
					<div className="p-2 flex flex-col gap-4">
						<div className=" flex gap-2 justify-between">
							<div className="flex gap-4">
								<div>
									<div className="text-sm font-semibold">Participants</div>
									<div className="mt-2">
										<span>Places:</span>
										<span className="h-6 w-6 bg-loading dark:bg-darkloading rounded-md"></span>
									</div>
								</div>
								<div className="self-center flex w-12 h-6 bg-loading dark:bg-darkloading rounded-md">
								</div>
							</div>
							<div className="h-[3.25rem] w-32 bg-loading dark:bg-darkloading rounded-md"></div>
						</div>
					</div>
					<div className="p-2 rounded-lg flex justify-between">
						<div className="text-sm font-semibold">Feedbacks</div>
						<div className="h-6 w-12 bg-loading dark:bg-darkloading rounded-md "></div>
					</div>
					<div className="p-2 rounded-lg flex justify-between">
						<div className="text-sm font-semibold">Event Configs</div>
						<div className="h-6 w-12 bg-loading dark:bg-darkloading rounded-md "></div>
					</div>
					<div className="p-2 rounded-lg flex justify-between">
						<div className="h-6 w-20 bg-loading dark:bg-darkloading rounded-md "></div>
						<div className="h-6 w-12 bg-loading dark:bg-darkloading rounded-md "></div>
					</div>
				</div>
			</div>
			<Back />
		</div>
	)
}
