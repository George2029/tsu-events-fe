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

let defaultValues: RegistrationContextObject = {
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
}

export type RegistrationContext = {
	contextState: RegistrationContextObject;
	setContextState: (obj: RegistrationContextObject) => void;
}


export default createContext<RegistrationContext>({
	contextState: defaultValues,
	setContextState: function(obj: RegistrationContextObject) {
		return
	}

})
