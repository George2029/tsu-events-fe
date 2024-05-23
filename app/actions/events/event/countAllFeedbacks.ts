export default async function(eventId: number): Promise<any> {
	let count = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/feedbacks/count/${eventId}`, {
		cache: 'no-store'
	});
	return count.json();
}

