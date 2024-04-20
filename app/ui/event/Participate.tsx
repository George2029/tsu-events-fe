import { PlusUser } from '@/app/ui/icons';

export default function Participate() {
	return (
		<div className="flex rounded-lg bg-neutral-950 text-green-500 justify-between p-2">
			<div className="text-sm font-semibold">Book a place</div>
			<div className="hover:animate-pulse">{PlusUser}</div>
		</div>
	)
}
