import vote from '@/app/actions/votes/vote';
import { CheckIcon, XIcon } from '@/app/ui/icons';
import { ThumbsUpMini, ThumbsDownMini } from '@/app/ui/miniIcons';

export default function VotesComponent({ props }: {
	props: {
		requestId: number, yesVotesAmount: number, noVotesAmount: number, existingVote: { value: boolean } | null, disabled: boolean
	}
}) {

	let { yesVotesAmount, noVotesAmount, requestId, existingVote, disabled } = props;
	let voteYes = vote.bind(null, requestId, true);
	let voteNo = vote.bind(null, requestId, false);

	return (
		<div>
			<span>
				<span className="text-sm font-semibold">Votes</span>
				<span className={`text-green-500 flex items-center`}>{CheckIcon}: {yesVotesAmount}</span>
				<span className="text-red-500 flex items-center">{XIcon}: {noVotesAmount}</span>
			</span>
			<div className="flex gap-2 mt-1">
				<>
					<form action={voteYes}>
						<button disabled={disabled} className={`disabled:text-gray-500 text-specialIcons dark:text-darkspecialIcons`}>
							{ThumbsUpMini}
						</button>
					</form>
					<form action={voteNo}>
						<button disabled={disabled} className={`disabled:text-gray-500 text-specialIcons dark:text-darkspecialIcons`}>
							{ThumbsDownMini}
						</button>
					</form>
					{
						(existingVote !== null) &&
						<span>You have voted {existingVote.value ?
							<span className={`text-green-500 font-bold`}>yes</span> :
							<span className={`text-red-500 font-bold`}>no</span>}
						</span>
					}
				</>
			</div>
		</div>
	)
}

/*
				{existingVote !== null ? <span>You have voted {existingVote.value ? <span className={`text-green-500 font-bold`}>yes</span> : <span className={`text-red-500 font-bold`}>no</span>}</span> :
				*/
