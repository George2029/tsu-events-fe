export default async function EventsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<div className="mx-auto px-5 flex flex-col max-w-xl w-full">
			{children}
		</div>
	);
}

