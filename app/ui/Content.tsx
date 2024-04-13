export default function Content({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="p-10 pb-20 w-full items-center justify-between text-sm flex flex-col">
			{children}
		</div>
	)
}
