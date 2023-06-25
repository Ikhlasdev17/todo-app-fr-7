import Login from '../pages/Login'
import Register from '../pages/Register'

export const routes = {
	protected: [],
	open: [
		{
			path: '/register',
			element: Register,
		},
		{
			path: '/login',
			element: Login,
		},
	],
}
