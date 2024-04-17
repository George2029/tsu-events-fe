export default function Content({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="p-10 md:mt-10 pb-40 w-full items-center justify-between flex flex-col">
			{children}
		</div>
	)
}
