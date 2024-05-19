'use server'

import canMod from '@/app/actions/moderation/canMod';
import Link from 'next/link';
import { EditIcon } from '@/app/ui/icons/icons';

export default async function ModEventIcon({ props }: { props: { id: number, request?: boolean } }) {
	let res = await canMod();
	if (!res) return;
	let { id, request } = props;
	let href: string;
	if (request) {
		href = "/modrequest/" + id;
	} else {
		href = "/event/" + id;
	}
	return <Link className="btn" href={href}>{EditIcon}</Link>
}
