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
	return <Link href={`/mod/${entityToMod}/edit/${id}`}>{EditIcon}</Link>
}
