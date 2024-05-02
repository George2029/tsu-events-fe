import { countYes, countNo } from '@/app/actions/votes/count';
import getVote from '@/app/actions/votes/getVote';
import isVerified from '@/app/actions/user/isVerified';
import Votes from '@/app/requests/[id]/Votes';

export default async function VotesComponent({ props }: { props: { requestId: number } }) {
	let { requestId } = props;
	let yesVotesAmount = await countYes(requestId);
	let noVotesAmount = await countNo(requestId);
	let existingVote = await getVote(requestId);
	let disabled: boolean = true;
	if (!existingVote) {
		disabled = !(await isVerified());
	}
	console.log(`existing vote `, existingVote);
	console.log(disabled);
	return <Votes props={{ requestId, yesVotesAmount, noVotesAmount, existingVote, disabled }} />
}
