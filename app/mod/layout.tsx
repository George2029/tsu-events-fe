import canMod from '@/app/actions/moderation/canMod'
import { notFound } from 'next/navigation';

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	let res = await canMod();
	if (!res) return notFound();
	return (
		<div className="px-10 w-full mt-10 flex flex-col">
			{children}
		</div>
	);
}

