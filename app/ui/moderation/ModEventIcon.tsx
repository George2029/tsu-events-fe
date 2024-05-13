'use server'

import canMod from '@/app/actions/moderation/canMod';
import Link from 'next/link';
import { EditIcon } from '@/app/ui/icons';

export default async function ModEventIcon({ props }: { props: { id: number, request?: boolean } }) {
	let res = await canMod();
	if (!res) return;
	let { id, request } = props;
	let entityToMod: string;
	if (request) {
		entityToMod = 'requests';
	} else {
		entityToMod = 'events';
	}
	return <Link className="block mt-4 outline-none md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder p-2 rounded-lg" href={`/mod/${entityToMod}/edit/${id}`}>{EditIcon}</Link>
}
