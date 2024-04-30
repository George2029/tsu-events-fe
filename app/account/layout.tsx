import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function AccountLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	console.log('Account Layout');
	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');

	return (

		<div className="px-5 w-full mx-auto max-w-xl md:mt-10 mt-20 ">
			{children}
		</div>
	)
}
