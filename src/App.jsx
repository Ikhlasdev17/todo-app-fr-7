import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { routes } from './utils/routes'

const App = () => {
	return (
		<Routes>
			{routes.open.map(item => (
				<Route key={item.path} path={item.path} element={<item.element />} />
			))}
		</Routes>
	)
}

export default App
