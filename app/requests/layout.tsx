export default async function EventsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<div className="flex w-full">
			{children}
		</div>
	);
}

