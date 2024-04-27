export default async function(eventId: number): Promise<any> {
	let count = await fetch(`http://localhost:3000/feedbacks/count/${eventId}`, {
		cache: 'no-store'
	});
	return count.json();
}

