import { Config } from '@/app/ui/icons';

export default function EventConfigs() {
	return (
		<div className="flex rounded-lg bg-neutral-950 justify-between p-2">
			<div className="text-sm font-semibold">Event Configs</div>
			<div>{Config}</div>
		</div>
	)
}
