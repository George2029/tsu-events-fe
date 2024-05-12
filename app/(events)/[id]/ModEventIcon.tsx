'use server'

import canMod from '@/app/actions/moderation/canMod';
import Link from 'next/link';
import { EditIcon } from '@/app/ui/icons';

export default async function ModEventIcon({ props }: { props: { id: number } }) {
	let { id } = props;
	let res = await canMod();
	if (!res) return;
	return <Link href={`/mod/events/edit/${id}`}>{EditIcon}</Link>
}
