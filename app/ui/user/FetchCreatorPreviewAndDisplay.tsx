import Link from 'next/link'
import getUserPreview from '@/app/actions/user/getUserPreview';

export default async function FetchCreatorPreviewAndDisplay({ props }: { props: { userId: number, createdAtString: string } }) {

	let { userId, createdAtString } = props;
	let { firstName, hue } = await getUserPreview(userId);
	let letter = firstName[0].toUpperCase();

	return (
		<div className="flex justify-between items-center text-sm gap-2">
			<div className="flex gap-1 items-center">
				<Link href={`/user/${userId}`} className={`hover:text-active dark:hover:text-darkactive active:scale-90 duration-300 rounded-full avatar-bg-${hue} ring-1 ring-border dark:ring-darkborder w-4 h-4 font-bold flex justify-center items-center`}>
					<span className="text-white text-xs drop-shadow-md">
						{letter}
					</span>
				</Link>
				<span>by</span>
				<Link href={`/user/${userId}`} className="hover:text-active dark:hover:text-darkactive active:scale-90 duration-300">{firstName}</Link>
			</div>
			<div className="font-light text-xs">{createdAtString}</div>
		</div>
	)
};
