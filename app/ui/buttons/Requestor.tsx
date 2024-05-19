'use server'

import { isRequestOwner } from '@/app/actions/requests/isRequestOwner';
import Link from 'next/link';
import { PencilIcon } from '@/app/ui/icons/icons';

export default async function RequestorEditIcon({ props }: { props: { id: number } }) {
	let { id } = props;
	let res = await isRequestOwner(id);
	if (!res) return;
	return <Link className="btn" href={`/request/${id}`}>{PencilIcon}</Link>
}
