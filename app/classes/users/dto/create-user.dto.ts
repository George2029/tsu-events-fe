import { IsEmail, MinLength, MaxLength, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
	@MaxLength(50)
	@IsNotEmpty()
	@IsString()
	username: string;

	@MaxLength(50)
	@IsString()
	@IsNotEmpty()
	firstName: string;

	@IsEmail()
	email: string;

	@MinLength(12)
	@IsNotEmpty()
	@IsString()
	password: string;

	constructor(
		username: string,
		firstName: string,
		email: string,
		password: string
	) {
		this.username = username;
		this.firstName = firstName;
		this.email = email;
		this.password = password;
	}
}
