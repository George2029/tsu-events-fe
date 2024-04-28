export default function EventSimpleField({ props }: { props: { title: string, value: string } }) {
	let { title, value } = props;
	return (
		<div className="p-2 rounded-lg">
			<div className="text-sm font-semibold">{title}</div>
			<div>{value}</div>
		</div>
	)
}

