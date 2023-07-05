import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, Outlet } from 'react-router-dom'

const Layout = () => {
	const { token } = useSelector(state => state.auth)

	if (!token) return <Navigate to='/login' replace={true} />

	return (
		<div className='layout'>
			<div className='sidebar'>
				<ul>
					<li>
						<Link className='active' to='/'>
							Todos
						</Link>
					</li>
					<li>
						<Link to='/create-todo'>Create todo</Link>
					</li>
					<li>
						<Link to='/categories'>Categories</Link>
					</li>
					<li>
						<Link to='/create-category'>Create category</Link>
					</li>
				</ul>
			</div>
			<div className='main'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
