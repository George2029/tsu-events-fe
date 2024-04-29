export default function({
	children,
}: Readonly<{
	children: React.ReactNode;

}>) {
	return (
		<div className="mt-20 px-5 max-w-xl w-full">
			{children}
		</div>
	)
}
