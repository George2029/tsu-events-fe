import { Feedback } from '@/app/ui/icons';

export default function Feedbacks() {
	return (
		<div className="flex rounded-lg bg-neutral-950 justify-between p-2">
			<div className="text-sm font-semibold">feedbacks</div>
			<div>{Feedback}</div>
		</div>
	)
}
