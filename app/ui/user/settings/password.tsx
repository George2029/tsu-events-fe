import { KeyIcon } from '@/app/ui/icons/icons'

export default function() {
	return (
		<div className="flex gap-4 items-center ">
			<div className="text-specialIcons dark:text-darkspecialIcons">{KeyIcon}</div>
			<div className="text-sm">Password</div>
		</div>
	)
}
