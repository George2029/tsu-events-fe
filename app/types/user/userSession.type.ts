import { UserStatus } from './enums/userStatus.enum';
import { UserRole } from './enums/userRole.enum';

export type UserSession = {
	userId: number,
	username: string,
	role: UserRole,
	status: UserStatus,
	email: string,
	firstName: string,
	visits: number,
	wins: number,
	level: number,
	hue: number,
	createdAt: Date
}
