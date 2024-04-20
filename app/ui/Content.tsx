export default function Content({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="pb-40 w-full items-center justify-between flex flex-col">
			{children}
		</div>
	)
}
