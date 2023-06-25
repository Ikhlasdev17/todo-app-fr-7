import React from 'react'

const Login = () => {
	return (
		<div className='auth-container'>
			<h1 className='auth-title'>Hello, welcome to login page!</h1>

			<form className='auth-form'>
				<input type='text' placeholder='Enter your phone...' />
				<input type='password' placeholder='Password' />
				<button className='btn btn-primary'>Login</button>
			</form>
		</div>
	)
}

export default Login
