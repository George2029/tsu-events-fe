'use server'

import { isRequestOwner } from '@/app/actions/requests/isRequestOwner';
import Link from 'next/link';
import { PencilIcon } from '@/app/ui/icons';

export default async function RequestorEditIcon({ props }: { props: { id: number } }) {
	let { id } = props;
	let res = await isRequestOwner(id);
	if (!res) return;
	return <Link className="block outline-none md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder mt-4 p-2 rounded-lg" href={`/exp/edit/${id}`}>{PencilIcon}</Link>
}
