//import Link from 'next/link';
import ModerationNavBar from '@/app/ui/ModerationPage';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full flex flex-col">
			<div className="text-lg text-center">Moderation Page</div>
			<ModerationNavBar />
			<div>{children}</div>
		</div>
	);
}

