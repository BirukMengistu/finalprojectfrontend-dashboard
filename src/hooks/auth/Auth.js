import Cookies from 'js-cookie';
import { loginUrl } from '../api';

export const isAuth = () => {
	const userId = Cookies.get('userId');
	const token = Cookies.get('token');
	return !!(token && userId);
};

/**
 * It removes the cookies from the browser and redirects the user to the login page.
 * @returns The return value is the result of the window.location.replace() method.
 */
/* export const logout = () => {
	const options = { domain: domain, path: '/' };
	Cookies.remove('ROLE_PATIENT_token', options);
	Cookies.remove('ROLE_PATIENT_id', options);
	Cookies.remove('ROLE_PATIENT_userId', options);
	return window.location.replace(loginUrl);
}; */


/**
 * It gets the user's id, token, and userId from the cookies, and then returns the user's data and the
 * options for the headers.
 * @returns An object with two properties: data and options.
 */
export const getAuthenticatedUser = () => {
	const user = {
		token: Cookies.get('token'),
		userId: Cookies.get('userId')
	};
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${user.token}`
	};
	if (!isAuth()) {
		return window.location.replace(loginUrl);
	}
	return { data: user, options: headers };
};
