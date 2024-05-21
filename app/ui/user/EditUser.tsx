'use client'

import { UserStatus } from '@/app/types/user/enums/userStatus.enum';
import { UserRole } from '@/app/types/user/enums/userRole.enum';

import { useFormState } from 'react-dom'
import editUser from '@/app/actions/user/mod/edit';
import UpdateUserButton from '@/app/ui/user/UpdateUserButton';

import Visits from './edit/Visits';

import Wins from './edit/Wins';
import Level from './edit/Level';
import Status from './edit/Status';
import Role from './edit/Role';

export default function EditRequest({ props }: {
	props: {
		existingValues: {
			visits: number,
			status: UserStatus,
			level: number,
			wins: number,
			role: UserRole,
		}
		,
		id: number
	}
}
) {
	let {
		id,
		existingValues: {
			visits,
			status,
			level,
			wins,
			role,
		}
	} = props;

	let action = editUser.bind(null, id);

	let [formState, setFormState] = useFormState(action, { message: '' });

	return (
		<form action={setFormState}>
			<div className="mt-4 space-y-4 border-b border-gray-900/10 dark:border-blue-800/30 pb-6">
				<Visits props={{ existingValue: visits }} />
				<Wins props={{ existingValue: wins }} />
				<Level props={{ existingValue: level }} />
				<Status props={{ existingValue: status }} />
				<Role props={{ existingValue: role }} />
			</div>
			<div className="mt-6 flex flex-col items-end">
				<div>{formState?.message}</div>
				<UpdateUserButton />
			</div>
		</form>
	);
}
