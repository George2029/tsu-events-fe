export default async function PlacesLeft({ props }: { props: { eventId: number } }) {
	let { eventId } = props;
	let pro = new Promise((res, rej) => {
		setTimeout(() => res(1), 3000);
	});
	await pro;
	return (
		<div className="w-5 h-5">
			8
		</div>
	)
}
