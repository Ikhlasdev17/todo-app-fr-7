import React from 'react'

const Register = () => {
	return (
		<div className='auth-container'>
			<h1 className='auth-title'>Hello, welcome to register page!</h1>

			<form className='auth-form'>
				<input type='text' placeholder='Enter your name...' />
				<input type='text' placeholder='Enter your phone...' />
				<input type='password' placeholder='Password' />
				<button className='btn btn-primary'>Register</button>
			</form>
		</div>
	)
}

export default Register
