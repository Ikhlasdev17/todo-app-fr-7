import { Button, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosAPI } from '../config/axios.interceptors'
import {
	fetchedTodos,
	fetchingErrorTodos,
	fetchingTodos,
} from '../store/reducers/todos.slice'

const Home = () => {
	const { loading, data } = useSelector(store => store.todos)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchingTodos())
		axiosAPI
			.get('/api/tasks')
			.then(res => {
				dispatch(fetchedTodos(res.data.payload))
			})
			.catch(() => {
				dispatch(fetchingErrorTodos())
			})
	}, [])

	const columns = [
		{
			key: 'name',
			dataIndex: 'name',
			title: 'Task title',
		},
		{
			key: 'category',
			dataIndex: 'category',
			title: 'Category',
		},
		{
			key: 'is_done',
			dataIndex: 'is_done',
			title: 'Completed',
		},

		{
			key: 'actions',
			dataIndex: 'actions',
			title: 'Actions',
		},
	]

	const dataSource = []

	data.map(item => {
		dataSource.push({
			key: item.id,
			name: item.task,
			category: item.category.name,
			is_done: item.is_done ? 'Yes' : 'No',
			actions: (
				<div>
					<Button>Delete</Button>
				</div>
			),
		})
	})

	return (
		<div className='main'>
			<h1 className='heading'>Todos</h1>

			<Table columns={columns} dataSource={dataSource} />
		</div>
	)
}

export default Home
