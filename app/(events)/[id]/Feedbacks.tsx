import { Feedback } from '@/app/ui/icons';
import dynamic from 'next/dynamic';

const NumberOfFeedbacks = dynamic(() => import('./NumberOfFeedbacks'), {
	loading: () => <div className="w-6 h-6 rounded-lg animate-pulse bg-sky-200 dark:bg-neutral-800"></div>
});

export default function Feedbacks({ props }: { props: { eventId: number } }) {
	let { eventId } = props;
	return (
		<div className="flex justify-between">
			<div className="text-sm font-semibold">Feedbacks</div>
			<div className="flex gap-2">
				<div>
					<NumberOfFeedbacks props={{ eventId }} />
				</div>
				<div className="cursor-pointer text-specialIcons dark:text-darkspecialIcons hover:animate-pulse">{Feedback}</div>
			</div>
		</div>
	)
}
