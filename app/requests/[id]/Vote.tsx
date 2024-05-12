import getVote from '@/app/actions/votes/getVote';
import { ThumbsUpMini, ThumbsDownMini } from '@/app/ui/miniIcons';
import vote from '@/app/actions/votes/vote';
import isVerified from '@/app/actions/user/isVerified';

export default async function Vote({ props }: { props: { id: number } }) {
	let { id } = props;

	let existingVote = await getVote(id);

	let voteYes = vote.bind(null, id, true);
	let voteNo = vote.bind(null, id, false);

	let disabled: boolean = true;
	let msg = '';

	if (!existingVote) {
		disabled = !(await isVerified());
		if (disabled) {
			msg = 'Sign in to vote!'
		} else {
			msg = "Vote!"
		}

	} else {
		msg = 'Already voted';
	}
	return (
		<>
			<form action={voteYes}>
				<button value={msg} disabled={disabled} className={`text-xs disabled:text-gray-500 hover:after:z-10 hover:after:ring-1 hover:after:rounded-lg hover:after:ring-active hover:after:text-text dark:hover:after:text-darktext hover:after:absolute hover:after:bg-background dark:hover:after:bg-darkbackground hover:after:p-2 hover:after:content-[attr(value)] text-specialIcons dark:text-darkspecialIcons`}>
					{ThumbsUpMini}
				</button>
			</form>
			<form action={voteNo}>
				<button value={msg} disabled={disabled} className={`text-xs disabled:text-gray-500 hover:after:z-10 hover:after:ring-1 hover:after:rounded-lg hover:after:ring-active hover:after:text-text dark:hover:after:text-darktext hover:after:absolute hover:after:bg-background dark:hover:after:bg-darkbackground hover:after:p-2 hover:after:content-[attr(value)] text-specialIcons dark:text-darkspecialIcons`}>
					{ThumbsDownMini}
				</button>
			</form>
		</>
	)
}
