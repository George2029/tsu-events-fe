import { countNo } from '@/app/actions/votes/count';

export default async function YesVotesAmount({ props }: { props: { id: number } }) {
	let { id } = props;
	return countNo(id);
}
