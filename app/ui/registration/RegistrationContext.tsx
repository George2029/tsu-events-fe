import { createContext } from 'react';

export type RegistrationContextObject = {
	currentPage: string,
	data: {
		username: {
			value: string,
			valid: boolean,
			message: string
		},
		firstName: {
			value: string,
			valid: boolean,
			message: string
		},
		password: {
			value: string,
			valid: boolean,
			message: string
		},
		password2: {
			value: string,
			valid: boolean,
			message: string
		},
		email: {
			value: string,
			valid: boolean,
			message: string
		},
		code: {
			digits: string[],
			valid: boolean,
			message: string
		}
	}
};

export default createContext<RegistrationContextObject>({
	currentPage: 'username',
	data: {
		username: {
			value: '',
			valid: false,
			message: ''
		},
		firstName: {
			value: '',
			valid: false,
			message: ''
		},
		password: {
			value: '',
			valid: false,
			message: ''
		},
		password2: {
			value: '',
			valid: false,
			message: ''
		},
		email: {
			value: '',
			valid: false,
			message: ''
		},
		code: {
			digits: ['', '', '', ''],
			valid: false,
			message: ''
		}
	}

})
