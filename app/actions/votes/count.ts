export let countYes = async (requestId: number): Promise<number> => {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/votes/request/${requestId}/count/yes`, { cache: 'no-store' })
	return res.json();
}
export let countNo = async (requestId: number): Promise<number> => {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/votes/request/${requestId}/count/no`, { cache: 'no-store' })
	return res.json();
}
export let countAll = async (requestId: number): Promise<number> => {
	let res = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/votes/request/${requestId}/count`, { cache: 'no-store' })
	return res.json();
}
