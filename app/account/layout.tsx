export default function AccountLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	console.log('Account Layout');
	return (

		<div className="px-5 w-full mx-auto max-w-xl mt-20 md:mt-10 ">
			{children}
		</div>
	)
}
