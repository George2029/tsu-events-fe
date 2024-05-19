export let LoadingItem = () => {
	return (
		<div className="p-0.5">
			<div className="space-y-2 mt-6 dark:bg-darkcardBG bg-cardBG p-4 rounded-lg ring-border dark:ring-darkborder hover:ring-active dark:hover:ring-darkactive ring-1 shadow-lg animate-pulse">
				<div className="flex justify-between">
					<div className="h-6 w-32 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
					<div className="h-6 w-6 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				</div>
				<div className="h-6 w-20 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				<div className="h-6 w-32 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				<div className="flex justify-between">
					<div className="h-5 w-28 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
					<div className="h-5 w-20 rounded-md bg-loading dark:bg-darkloading animate-pulse"></div>
				</div>
			</div>
		</div>
	)
}

export default function EventsLoadingSkeleton() {
	return (
		<div>
			<LoadingItem />
			<LoadingItem />
			<LoadingItem />
			<LoadingItem />
		</div>
	)
}
