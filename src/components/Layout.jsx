import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='layout'>
			<div className='sidebar'>Sidebar</div>
			<div className='main'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
