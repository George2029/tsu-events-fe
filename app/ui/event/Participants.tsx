import dynamic from 'next/dynamic'
import { UserGroup, PlusUser, MinusUser, Spinner } from '@/app/ui/icons';

const PlacesLeft = dynamic(() => import('./PlacesLeft'), {
	loading: () =>
		<div className="w-5 h-5">
			...
		</div>

})

const Book = dynamic(() => import('./Book'), {
	loading: () => <>
		<div className="text-green-500 self-center">{PlusUser}</div>
		<div className="text-green-500 text-sm font-semibold">I am going!</div>
	</>
	,
})


export default function Participants({ props }: { props: { placesTotal: number, eventId: number } }) {
	let { placesTotal, eventId } = props;
	console.log(placesTotal);

	return (
		<div className="p-2 rounded-lg bg-neutral-950 flex flex-col gap-4">
			<div className=" flex gap-2 justify-between">
				<div>
					<div className="text-sm font-semibold">Participants</div>
					<div className="flex gap-2">
						<PlacesLeft props={{ eventId }} />
						<p>out of</p>
						<div>{placesTotal.toString()}</div>
					</div>
				</div>
				<div className="self-center flex gap-2 m-2">
					<div className="flex flex-col">
						<Book props={{ eventId }} />
					</div>
				</div>
			</div>
			<div className="text-yellow-500 hover:animate-pulse">{UserGroup}</div>
		</div>
	)
}
