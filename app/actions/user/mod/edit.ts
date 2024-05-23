'use server'

import type { EditUserDto } from '@/app/types/user/user';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { UserStatus } from '@/app/types/user/enums/userStatus.enum';
import { UserRole } from '@/app/types/user/enums/userRole.enum';

type PrevState = {
	message: string
}

export default async function(id: number, prevState: PrevState, formData: FormData): Promise<PrevState> {
	let sid = cookies().get('connect.sid');
	if (!sid) redirect('/signin');

	let dto: EditUserDto = {};

	let visits = formData.get('visits');
	if (visits) {
		if (!isNaN(+visits)) {
			dto.visits = +visits;
		} else {
			return { message: 'visits is not a numerical string' };
		}
	}

	let level = formData.get('level');
	if (level) {
		if (!isNaN(+level)) {
			dto.level = +level;
		} else {
			return { message: 'level is not a numerical string' };
		}
	}

	let wins = formData.get('wins');
	if (wins) {
		if (!isNaN(+wins)) {
			dto.wins = +wins;
		} else {
			return { message: 'wins is not a numerical string' };
		}
	}

	let role = formData.get('role') as UserRole;
	if (role) {
		if (Object.values(UserRole).includes(role as UserRole)) {
			dto.role = role;
		} else {
			let message = 'user role validation failed';
			console.log(message);
			return { message };
		}
	}

	let status = formData.get('status');
	if (status) {
		if (Object.values(UserStatus).includes(status as UserStatus)) {
			dto.role = role;
		} else {
			let message = 'user status validation failed';
			console.log(message);
			return { message };
		}
	}

	let req = await fetch(`http://${process.env.NEST_HOST}:${process.env.NEST_PORT}/mod/users/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Cookie': `connect.sid=${sid.value}`
		},
		body: JSON.stringify(dto)
	});

	if (!req.ok) {
		let msg = await req.json();
		console.log(`FAILED: edit user`, msg);
		let message = String(msg);
		return { message };
	} else {
		redirect('/moduser/' + id);
	}


}
