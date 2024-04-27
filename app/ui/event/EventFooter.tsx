import { Star } from '@/app/ui/icons';

export default function EventFooter({ props }: { props: { createdAtTime: string, rating: number } }) {
	let { createdAtTime, rating } = props;
	return (
		<div className="flex justify-between p-2">
			<div className="text-sm italic text-center">{createdAtTime}</div>
			<div className="flex gap-1">
				<div>{rating}</div>
				<div className="cursor-pointer text-specialIcons dark:text-darkspecialIcons hover:animate-pulse">{Star}</div>
			</div>
		</div>
	)
}
