import type { Metadata } from "next";
import 'reflect-metadata';
import "./globals.css";
import dynamic from 'next/dynamic';

import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
	title: "Uni Events MS",
	description: "University Events Management System",
};


const ThemeToggler = dynamic(() => import('@/app/ui/ThemeToggler'), {
	ssr: false,
	loading: () => <div className="flex items-center absolute top-5 right-5 z-50 h-6 w-6 rounded-lg animate-pulse bg-sky-200 dark:bg-neutral-800"></div>
});

import NavBar from './ui/navbar/NavBar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class">
					<div className="bg-background text-text dark:text-darktext dark:bg-darkbackground">
						<main className=" overflow-hidden relative flex max-w-4xl min-h-screen flex-col items-center my-o mx-auto">
							<ThemeToggler />
							<div className="absolute top-4 right-14 z-50 font-bold text-xl select-none self-center">Uni Events</div>
							<NavBar />
							<div className="pb-40 w-full items-center flex flex-col">
								{children}
							</div>
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html >
	);
}
