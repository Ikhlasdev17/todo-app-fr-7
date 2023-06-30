import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const routes = {
	protected: [
		{
			path: '/',
			element: Home,
		},
	],
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
