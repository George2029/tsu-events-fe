'use server'

import { isRequestOwner } from '@/app/actions/requests/isRequestOwner';
import Link from 'next/link';
import { EditIcon } from '@/app/ui/icons';

export default async function RequestorEditIcon({ props }: { props: { id: number } }) {
	let { id } = props;
	let res = await isRequestOwner(id);
	if (!res) return;
	return <Link href={`/exp/edit/${id}`}>{EditIcon}</Link>
}
