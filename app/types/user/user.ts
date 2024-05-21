import { UserStatus } from './enums/userStatus.enum';
import { UserRole } from './enums/userRole.enum';

export type User = {
	id: number,
	username: string,
	firstName: string,
	status: UserStatus,
	role: UserRole,
	visits: number,
	wins: number,
	level: number,
	email: string,
	updatedAt: string
}

export type EditUserDto = {
	visits?: number,
	wins?: number,
	level?: number,
	status?: UserStatus,
	role?: UserRole,
}
