import { PlusUser, MinusUser } from '@/app/ui/icons';

export default async function Book({ props }: { props: { eventId: number } }) {
	let { eventId } = props;
	let pro = new Promise((res, rej) => setTimeout(() => res(1), 3000));
	await pro;
	//todo: [server action] fetch participant status
	return (
		<>
			<div className="text-red-500 self-center">{MinusUser}</div>
			<div className="text-red-500 text-sm font-semibold">Not going</div>
		</>
	)
}
