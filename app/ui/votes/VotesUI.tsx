import vote from '@/app/actions/votes/vote';
import { CheckIcon, XIcon } from '@/app/ui/icons';
import { ThumbsUpMini, ThumbsDownMini } from '@/app/ui/miniIcons';

export default function VoteClientComponent({ props }: {
	props: {
		requestId: number, yesVotesAmount: number, noVotesAmount: number, existingVote: { value: boolean } | null
	}
}) {

	let { yesVotesAmount, noVotesAmount, requestId, existingVote } = props;
	let voteYes = vote.bind(null, requestId, true);
	let voteNo = vote.bind(null, requestId, false);

	return (
		<div>
			<span>
				<span className="text-sm font-semibold">Votes</span>
				<span className={` flex items-center`}>{CheckIcon}: {yesVotesAmount}</span>
				<span className="flex items-center">{XIcon}: {noVotesAmount}</span>
			</span>
			<div className="flex gap-2">
				<form action={voteYes}>
					<button className={`${existingVote?.value === false ? 'scale-75' : ''} text-specialIcons dark:text-darkspecialIcons`}>
						{ThumbsUpMini}
					</button>
				</form>
				<form action={voteNo}>
					<button className={`${existingVote?.value ? 'scale-75' : ''} text-specialIcons dark:text-darkspecialIcons`}>
						{ThumbsDownMini}
					</button>
				</form>
			</div>
		</div>
	)
}
